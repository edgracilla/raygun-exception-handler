'use strict'

const reekoh = require('reekoh')
const plugin = new reekoh.plugins.ExceptionLogger()

let raygunClient =  null

plugin.on('exception', (error) => {
  raygunClient.send(error, {}, (response) => {
    if (response.statusCode === 202) return

    console.error('Error on Raygun.', response.statusMessage)
    plugin.logException(new Error(response.statusMessage))
  })
  plugin.log(JSON.stringify({
    title: 'Exception sent to Raygun',
    data: {message: error.message, stack: error.stack, name: error.name}
  }))
})

plugin.once('ready', () => {
  let raygun = require('raygun')
  raygunClient = new raygun.Client().init({ apiKey: plugin.config.apiKey})

  plugin.log('Raygun Exception Handler Initialized.')
  plugin.emit('init')
})

module.exports = plugin

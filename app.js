'use strict';

var platform = require('./platform'),
	raygunClient;

/*
 * Listen for the error event.
 */
platform.on('error', function (error) {
    raygunClient.send(error, {}, function(response){
        if (response.statusCode === 202) return;

        console.error('Error on Raygun.', response.statusMessage);
        platform.handleException(new Error(response.statusMessage));
    });
});

/*
 * Event to listen to in order to gracefully release all resources bound to this service.
 */
platform.on('close', function () {
	platform.notifyClose();
});

/*
 * Listen for the ready event.
 */
platform.once('ready', function (options) {
	var raygun = require('raygun');
	raygunClient = new raygun.Client().init({ apiKey: options.api_key });

	platform.log('Raygun Exception Handler Initialized.');
	platform.notifyReady();
});
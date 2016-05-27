'use strict';

const API_KEY = '7EwCFpyQQQMEwiSUFun4Tw==';

var cp     = require('child_process'),
	assert = require('assert'),
	exceptionHandler;

describe('Exception Handler', function () {
	this.slow(5000);

	after('terminate child process', function () {
		setTimeout(function () {
			exceptionHandler.kill('SIGKILL');
		}, 5000);
	});

	describe('#spawn', function () {
		it('should spawn a child process', function () {
			assert.ok(exceptionHandler = cp.fork(process.cwd()), 'Child process not spawned.');
		});
	});

	describe('#handShake', function () {
		it('should notify the parent process when ready within 5 seconds', function (done) {
			this.timeout(5000);

			exceptionHandler.on('message', function (message) {
				if (message.type === 'ready')
					done();
			});

			exceptionHandler.send({
				type: 'ready',
				data: {
					options: {
						api_key: API_KEY
					}
				}
			}, function (error) {
				assert.ifError(error);
			});
		});
	});

	describe('#error', function (done) {
		it('should process the error data', function () {
			var sampleError = new Error('Raygun Exception Handler Plugin Test Error.');

			exceptionHandler.send({
				type: 'error',
				data: {
					message: sampleError.message,
					stack: sampleError.stack
				}
			}, done);
		});
	});
});
// Tugas: Gunakan closure untuk membuat fungsi logger

function createLogger(prefix) {
	return function (message) {
		console.log(`[${prefix}] ${message}`);
	};
}

const errorLogger = createLogger('ERROR');
errorLogger('This is an error!');

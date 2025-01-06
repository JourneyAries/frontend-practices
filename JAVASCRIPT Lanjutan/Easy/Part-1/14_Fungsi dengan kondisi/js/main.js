// Tugas: Gunakan closure untuk menambahkan logika kondisi

function createConditionLogger(condition) {
	return function (message) {
		if (condition) {
			console.log(`LOG: ${message}`);
		} else {
			console.log('Logging disabled');
		}
	};
}

const logger = createConditionLogger(false);
logger('This will be logged');

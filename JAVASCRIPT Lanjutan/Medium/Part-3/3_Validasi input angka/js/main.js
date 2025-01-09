function validateNumber(input) {
	try {
		if (isNaN(input)) throw new Error('Input is not a number');
		console.log('Valid Number: ', error);
	} catch (error) {
		console.error(error.message);
	}
}
validateNumber('abc');

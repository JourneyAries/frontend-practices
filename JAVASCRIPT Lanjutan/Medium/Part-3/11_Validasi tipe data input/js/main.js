function validateType(input) {
	try {
		if (typeof input !== 'string') throw new TypeError('Expected a String');
		console.log('Input is valid');
	} catch (error) {
		console.error(error.message);
	}
}
validateType(123);

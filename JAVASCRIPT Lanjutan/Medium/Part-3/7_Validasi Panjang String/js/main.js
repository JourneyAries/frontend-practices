function validateLenght(str) {
	try {
		if (str.length > 10) throw new Error('String is too long');
		console.log('String is valid: ', str);
	} catch (error) {
		console.error('Validation Error: ', error.message);
	}
}
validateLenght('udin');
try {
	try {
		throw new Error('Inner Error');
	} catch (error) {
		console.error('caught inner: ', error.message);
		throw new Error('outer error');
	}
} catch (error) {
	console.error('Caught outer: ', error.message);
}

try {
	throw new Error('file not found');
} catch (error) {
	error.timestamp = new Date();
	console.error(error.message, 'at', error.timestamp);
}

function executeCallBack(callback) {
	try {
		callback();
	} catch (error) {
		console.error('Callback Error: ', error.message);
	}
}
executeCallBack(() => {
	throw new Error('Error in callback');
});

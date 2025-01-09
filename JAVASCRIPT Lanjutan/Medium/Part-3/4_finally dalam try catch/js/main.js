try {
	console.log('trying something...');
	throw new Error('Oops!');
} catch (error) {
	console.error('Caught: ', error.message);
} finally {
	console.log('This runs no matter what');
}

try {
	let result = 10 / 0;
	if (!isFinite(result)) throw new Error('Division by Zero');
} catch (error) {
	console.error('Error: ', error.message);
}

try {
	eval('invalid code');
} catch (error) {
	console.error('Eval Error: ', error.message);
}

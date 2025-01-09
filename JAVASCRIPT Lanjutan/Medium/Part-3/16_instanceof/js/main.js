try {
	JSON.parse('{invalid}');
} catch (error) {
	if (error instanceof SyntaxError) {
		console.error('Syntax Error caught: ', error.message);
	} else {
		console.error('Unknown Error');
	}
}


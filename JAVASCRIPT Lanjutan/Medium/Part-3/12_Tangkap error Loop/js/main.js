let numbers = [1, 2, 'three', 4];
numbers.forEach((num) => {
	try {
		if (typeof num !== 'number') throw new Error('not a number');
		console.log('Number: ', num);
	} catch (error) {
		console.error(error.message);
	}
});

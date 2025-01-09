function checkArrayLength(arr) {
	try {
		if (arr.length < 3) throw new Error('Array too short');
		console.log('Array is valid');
	} catch (error) {
		console.error(error.message);
	}
}

checkArrayLength([1, 2]);

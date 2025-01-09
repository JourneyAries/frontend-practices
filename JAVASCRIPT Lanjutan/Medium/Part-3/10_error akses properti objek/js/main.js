try {
	let obj = null;
	console.log(obj.property);
} catch (error) {
	console.error('Property Access Error: ', error.message);
}

async function fetchData() {
	try {
		let response = await fetch('invalid-url');
	} catch (error) {
		console.error('async error: ', error.message);
	}
}
fetchData();

try {
	let data = JSON.parse('{invalidJSON: true}');
} catch (error) {
	console.error('JSON Parse ErrorL:', error.message);
}

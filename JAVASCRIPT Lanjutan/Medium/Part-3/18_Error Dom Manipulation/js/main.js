try {
	document.querySelector('invalidSelector').innerHTML = 'Hello';
} catch (error) {
	console.error('DOM Manipulation error: ', error.message);
}

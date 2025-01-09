function checkAge(age) {
	if (age < 10) throw new Error('underage');
	console.log('Age is valid :', age);
}
try {
	checkAge(16);
} catch (error) {
	console.error(error.message);
}

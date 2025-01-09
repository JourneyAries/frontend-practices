// Tugas: Modifikasi agar fungsi callback menerima argumen tambahan.

function multiply(a, b) {
	console.log(a * b);
}

function calculate(num1, num2, callback) {
	callback(num1, num2);
}

calculate(2, 5, multiply);

// Tugas: Gunakan spread untuk menyebarkan elemen array ke dalam fungsi

const numbers = [1, 2, 3];
function sum(a, b, c) {
	return a + b + c;
}

console.log(sum(...numbers));
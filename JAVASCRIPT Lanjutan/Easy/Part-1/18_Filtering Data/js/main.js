// Tugas: Buat fungsi untuk menyaring angka genap dari array

function createFilter(callback) {
	return function (array) {
		return array.filter(callback);
	};
}

const filterEvens = createFilter((x) => x % 2 === 0);
console.log(filterEvens([1, 2, 3, 4]));

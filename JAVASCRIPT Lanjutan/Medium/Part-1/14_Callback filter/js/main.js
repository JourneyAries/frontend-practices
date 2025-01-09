// Tugas: Gunakan callback untuk menyaring elemen array.

function filterArray(arr, callback) {
	return arr.filter(callback);
}

const result = filterArray([1, 2, 3, 4], (num) => num % 2 === 0);
console.log(result);

// Tugas: Gunakan callback untuk memproses elemen array dan mengembalikan hasilnya.

function processArray(arr, callback) {
	return arr.map(callback);
}

const result = processArray([1, 2, 3], (num) => num * 2);
console.log(result);

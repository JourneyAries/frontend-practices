// Tugas: Gunakan callback untuk memvalidasi apakah semua elemen array adalah angka.

function validateArray(arr, callback) {
	callback(arr.every(Number.isFinite));
}

validateArray([1, 2, '3'], (isValid) => console.log(isValid));

// function validateArray(arr, callback) {
//     const isValid = arr.every(Number.isFinite);
//     callback(isValid);
// }
// validateArray([1, 2, '3'], (isValid) => console.log(isValid));

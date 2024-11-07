//24. Menggunakan Array.prototype.flat()
//Buat fungsi flattenArray(arr) yang menerima array bersarang (nested array) dan mengembalikan array dalam bentuk satu dimensi.
//Contoh: flattenArray([1, [2, 3], [4, [5]]]) mengembalikan [1, 2, 3, 4, 5].

function flattenArray(arr) {
  return arr.flat().flat();
}

console.log(flattenArray([1, [2, 3], [4, [5]]]));
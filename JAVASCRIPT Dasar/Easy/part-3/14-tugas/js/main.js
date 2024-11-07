//14. Menggunakan Array.prototype.concat()
//Buat fungsi mergeArrays(arr1, arr2) yang menggabungkan dua array arr1 dan arr2 menjadi satu array.
//Contoh: mergeArrays([1, 2], [3, 4]) mengembalikan [1, 2, 3, 4].

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2], [3, 4]));
//15. Menggunakan Array.prototype.indexOf()
//Buat fungsi findIndex(arr, value) yang mengembalikan indeks pertama dari value dalam arr, atau -1 jika value tidak ditemukan
//Contoh: findIndex([1, 2, 3], 2) mengembalikan 1.

function findIndex(arr, value) { 
  return arr.indexOf(value);
}

console.log(findIndex([1, 2, 3], 2));
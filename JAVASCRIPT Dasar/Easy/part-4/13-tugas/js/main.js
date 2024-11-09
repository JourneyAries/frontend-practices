//13. Menggunakan Array.prototype.unshift()
//Buat fungsi addToFront(arr, value) yang menambahkan value di awal array arr dan mengembalikan panjang array baru.
//Contoh: addToFront([2, 3], 1) mengembalikan 3.

function addToFront(arr, value) {
  arr.unshift(value)
  return arr.length;
}

console.log(addToFront([2, 3], 1));
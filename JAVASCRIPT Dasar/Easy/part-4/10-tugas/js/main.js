//10. Menggunakan Array.prototype.push()
//Buat fungsi addToArray(arr, value) yang menambahkan value di akhir array arr dan mengembalikan panjang array baru.
//Contoh: addToArray([1, 2], 3) mengembalikan 3.

function addToArray(arr, value) {
  arr.push(value);
  return arr.length;
}

console.log(addToArray([1, 2], 3));
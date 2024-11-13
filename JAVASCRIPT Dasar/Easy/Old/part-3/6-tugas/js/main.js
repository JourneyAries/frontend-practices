//6. Menggunakan Array.prototype.reduce()
//Buat fungsi sumArray(arr) yang mengembalikan jumlah dari semua elemen dalam array arr.
//Contoh: sumArray([1, 2, 3, 4]) mengembalikan 10.

function sumArray(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue);
}

console.log(sumArray([1, 2, 3, 4]));
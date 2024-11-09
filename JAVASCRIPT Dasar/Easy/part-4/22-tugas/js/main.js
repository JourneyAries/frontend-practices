//22. Menggunakan Array.prototype.reduceRight()
//Buat fungsi multiplyArray(arr) yang mengalikan semua elemen dalam array arr dari kanan ke kiri.
//Contoh: multiplyArray([1, 2, 3, 4]) mengembalikan 24.

function multiplyArray(arr) {
  return arr.reduceRight((accumulator, currentValue) => accumulator * currentValue);
}

console.log(multiplyArray([1, 2, 3, 4]));
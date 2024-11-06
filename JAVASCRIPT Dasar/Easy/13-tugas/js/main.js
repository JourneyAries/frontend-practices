//13. Menggunakan Math.max() dan Math.min()
//Buat fungsi findMaxMin(arr) yang mengembalikan objek { max, min } dengan nilai maksimum dan minimum dari array arr.
//Contoh: findMaxMin([3, 5, 1, 8]) mengembalikan { max: 8, min: 1 }.

function findMaxMin(arr) {
  return `max: ${Math.max(...arr)} min: ${Math.min(...arr)}`;
}

console.log(findMaxMin([3, 5, 1, 8]));
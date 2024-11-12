//9. Menyaring Elemen Berdasarkan Kriteria
//Buat fungsi filterByCriteria(arr, callback) yang menerima array arr dan fungsi callback. Fungsi ini mengembalikan array baru yang hanya berisi elemen-elemen yang memenuhi kriteria yang ditentukan oleh callback.

function filterByCriteria(arr, callback) {
  return arr.filter(callback);
}

console.log(filterByCriteria([1, 2, 3, 4], (num) => num % 2 === 0));
//19. Menggunakan Array.prototype.findIndex()
//Buat fungsi indexOfNegative(arr) yang mengembalikan indeks pertama dari bilangan negatif dalam array arr, atau -1 jika tidak ada.
//Contoh: indexOfNegative([1, 2, -3, 4]) mengembalikan 2.

function indexOfNegative(arr) {
  return arr.findIndex(num => num < 0);
}

console.log(indexOfNegative([1, 2, -3, 4]));
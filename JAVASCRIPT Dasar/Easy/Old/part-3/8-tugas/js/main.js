//8. Menggunakan Array.prototype.some()
//Buat fungsi containsNegative(arr) yang mengembalikan true jika terdapat bilangan negatif dalam array arr, dan false jika tidak.
//Contoh: containsNegative([1, -2, 3]) mengembalikan true.

function containsNegative(arr) {
  return arr.some(num => num < 0);
}

console.log(containsNegative([1, -2, 3]));
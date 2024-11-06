//21. Menggunakan Array.prototype.includes()
//Buat fungsi hasValue(arr, value) yang mengembalikan true jika value terdapat dalam arr, dan false jika tidak.
//Contoh: hasValue([1, 2, 3], 2) mengembalikan true.

function hasValue(arr, value) {
  return arr.includes(value);
}

console.log(hasValue([1, 2, 3], 2));

//11. Memeriksa Apakah Semua Elemen Sama
//Buat fungsi allElementsEqual(arr) yang mengembalikan true jika semua elemen dalam array arr adalah sama, dan false jika tidak.

function allElementsEqual(arr) {
  return arr.every(e => e == arr[0]);
}

console.log(allElementsEqual([5, 5, 5]));
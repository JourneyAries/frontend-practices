//12. Mengonversi Array ke String dengan Pembatas
//Buat fungsi arrayToString(arr, separator) yang menerima array arr dan string separator, dan mengonversi array ke string dengan elemen-elemen yang dipisahkan oleh separator.


function arrayToString(arr, separator) {
  return arr.join(separator);
}

console.log(arrayToString([1, 2, 3], '-'));
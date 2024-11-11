//23. Deteksi Kombinasi Tiga dalam Deret
//Buat fungsi findThreeInARow(arr) yang menerima array arr dan mengembalikan true jika ada tiga elemen yang sama secara berurutan, dan false jika tidak.

function findThreeInARow(arr) {
  for (let i = 0; i < arr.length - 2; i++){
    if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
      return true;
    }
  }
  return false;
}

console.log(findThreeInARow([1, 2, 2, 2, 3]));

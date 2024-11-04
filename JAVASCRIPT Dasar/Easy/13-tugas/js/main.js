//13. Menjumlahkan Elemen Array
//Buat fungsi sumArray(arr) yang menerima array angka dan mengembalikan jumlah dari semua elemen dalam array
//Contoh: sumArray([1, 2, 3, 4]) mengembalikan 10.

function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4]));
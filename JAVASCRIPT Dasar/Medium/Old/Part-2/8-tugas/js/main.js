//8. Menjumlahkan Elemen yang Tidak Ditemukan di Array Kedua
//Buat fungsi sumNotInSecondArray(arr1, arr2) yang menerima dua array dan mengembalikan jumlah elemen-elemen dari arr1 yang tidak ada di arr2.

function sumNotInSecondArray(arr1, arr2) {
  return arr1
    .filter((item => !arr2.includes(item)))
    .reduce((sum, item) => sum + item, 0);
}

console.log(sumNotInSecondArray([1, 2, 3, 4], [3, 4]));
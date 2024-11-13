// 14. Membalik Urutan Array
//Buat fungsi reverseArray(arr) yang menerima array dan mengembalikan array dengan elemen yang dibalik.
//Contoh: reverseArray([1, 2, 3, 4]) mengembalikan [4, 3, 2, 1].

function reverseArray(arr) {
  for (let i = 0; i < arr.length /2; i++){
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4]));
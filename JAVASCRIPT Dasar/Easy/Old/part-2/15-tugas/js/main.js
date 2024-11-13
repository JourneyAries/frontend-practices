//15. Menambahkan Elemen Baru di Awal Array
//Buat fungsi prepend(arr, newElement) yang menerima array dan sebuah elemen baru, lalu mengembalikan array baru dengan elemen tersebut di awal array.
//Contoh: prepend([2, 3, 4], 1) mengembalikan [1, 2, 3, 4].


function prepend(arr, newElement) { 
  for (let i = arr.length; i > 0; i--){
    arr[i] = arr[i - 1];
  }
  arr[0] = newElement;
  return arr;
}

console.log(prepend([2, 3, 4], 1));
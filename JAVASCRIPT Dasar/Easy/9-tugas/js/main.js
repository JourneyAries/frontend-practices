//9. Mengurutkan Array
//Buat fungsi sortArray(arr) yang menerima array angka dan mengembalikan array yang diurutkan dari yang terkecil ke terbesar.
//Contoh: sortArray([4, 2, 8, 5]) mengembalikan [2, 4, 5, 8].

function sortArray(arr) {
  for (let i = 0; i<arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArray([4, 2, 8, 5]));
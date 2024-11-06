//11. Menyaring Angka Genap
//Buat fungsi filterEven(arr) yang menerima array angka dan mengembalikan array yang hanya berisi angka genap.
//Contoh: filterEven([1, 2, 3, 4, 5]) mengembalikan [2, 4].

function filterEven(arr) {
  let newArr = '';
  for (let i = 0; i <= arr.length; i++){
    if (arr[i] % 2 == 0) {
      if (newArr !== '') {
        newArr += ', ';
      }
      newArr += arr[i];
    }
  }
  return `[${newArr}]`;
}

console.log(filterEven([1, 2, 3, 4, 5]));
//7. Menghapus Angka Duplikat dari Array
//Buat fungsi removeDuplicates(arr) yang menerima array angka dan mengembalikan array tanpa angka yang duplikat.
//Contoh: removeDuplicates([1, 2, 2, 3, 4, 4, 5]) mengembalikan [1, 2, 3, 4, 5].

function removeDuplicates(arr) {
  let newArr = '';
  for (let i = 0; i < arr.length; i++){
    if (!newArr.includes(arr[i])) {
      newArr += arr[i];
      if (i < arr.length - 1) {
        newArr += ', ';
      }
    }
  }
  return `[${newArr}]`;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
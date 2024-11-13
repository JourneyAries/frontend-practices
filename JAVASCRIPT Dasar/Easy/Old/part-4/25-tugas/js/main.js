//25: Mencari Elemen yang Tidak Ada di Array Lain Menggunakan filter() dan includes()
//Buat fungsi findUniqueElements(arr1, arr2) yang mengembalikan elemen-elemen yang ada di arr1 tetapi tidak ada di arr2 menggunakan filter() dan includes().
//findUniqueElements([1, 2, 3, 4], [3, 4, 5, 6]);  // Output: [1, 2]

function findUniqueElements(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}

console.log(findUniqueElements([1, 2, 3, 4], [3, 4, 5, 6]));
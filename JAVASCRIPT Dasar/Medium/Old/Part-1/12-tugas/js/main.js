//12. Menggabungkan Dua Array Tanpa Duplikat
//Buat fungsi mergeArraysUnique(arr1, arr2) yang menggabungkan arr1 dan arr2 menjadi satu array tanpa elemen duplikat.

function mergeArrayUnique(arr1, arr2) {
  const newArr = new Set([...arr1, ...arr2]);
  return [...newArr];
}

console.log(mergeArrayUnique([1, 2, 3], [3, 4, 5]));
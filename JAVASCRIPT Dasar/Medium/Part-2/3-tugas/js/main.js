//5. Menggabungkan Array dengan Syarat
//Buat fungsi combineArraysWithCondition(arr1, arr2) yang menggabungkan dua array dan mengembalikan array baru yang hanya berisi elemen yang ada pada kedua array tersebut (intersection).

function combineArraysWithCondition(arr1, arr2) {
  const newArr1 = new Set(arr1);

  return arr2.filter(item => newArr1.has(item));
}

console.log(combineArraysWithCondition([1, 2, 3], [2, 3, 4]));
//17. Menghitung Elemen yang Sama dalam Dua Array
//Fungsi: countCommonElements(arr1, arr2)
//Parameter: arr1 (array), arr2 (array)
//Hint: Loop salah satu array dan cek apakah elemen ada di array lain.
//Contoh Pemanggilan: countCommonElements([1, 2, 3], [2, 3, 4]) // 2

//for loop & includes
function countCommonElements1(arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++){
    if (arr2.includes(arr1[i])) {
      count++;
    }
  }
  return count;
}

//set
function countCommonElements2(arr1, arr2) {
  const set2 = new Set(arr2);
  let count = 0;
  for (let i = 0; i < arr1.length; i++){
    if (set2.has(arr1[i])) {
      count++
    }
  }
  return count;
}

//filter & set
function countCommonElements3(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(item => set2.has(item)).length;
}

//reduce
function countCommonElements4(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.reduce((count, item) => set2.has(item) ? count + 1 : count, 0);
}

console.log(countCommonElements1([1, 2, 3], [2, 3, 4]));
console.log(countCommonElements2([1, 2, 3], [2, 3, 4]));
console.log(countCommonElements3([1, 2, 3], [2, 3, 4]));
console.log(countCommonElements4([1, 2, 3], [2, 3, 4]));
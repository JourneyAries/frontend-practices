//13. Perkalian Dua Array
//Fungsi: multiplyArrays(arr1, arr2)
//Parameter: arr1 (array), arr2 (array)
//Hint: Loop keduanya dan kalikan elemen sesuai index.
//Contoh Pemanggilan: multiplyArrays([1, 2], [3, 4]) // [3, 8]

//for loop biasa
function multiplyArray1(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++){
    result.push(arr1[i] * arr2[i]);
  }
  return result;
}

//forEach
function multiplyArray2(arr1, arr2) {
  let result = [];
  arr1.forEach((item, index) => {
    result.push(item * arr2[index]);
  });
  return result;
}

//for of
function multiplyArray3(arr1, arr2) {
  let result = [];
  for (let [index, item] of arr1.entries()) {
    result.push(item * arr2[index]);
  }

  return result;
}

//map
function multiplyArray4(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error('Arrays must have the same length');
  }
  return arr1.map((item, index) => item * arr2[index]);
}

//reduce
function multiplyArray5(arr1, arr2) {
  return arr1.reduce((acc, item, index) => {
    acc.push(item * arr2[index]);
    return acc;
  },[]);
}

console.log(multiplyArray1([1, 2], [3, 4]));
console.log(multiplyArray2([1, 2], [3, 4]));
console.log(multiplyArray3([1, 2], [3, 4]));
console.log(multiplyArray4([1, 2], [3, 4]));
console.log(multiplyArray5([1, 2], [3, 4]));
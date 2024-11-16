//4. Menggabungkan Dua Array
//Fungsi: combineArrays(arr1, arr2)
//Parameter: arr1 (array), arr2 (array)
//Hint: Gunakan metode concat.
//Contoh Pemanggilan: combineArrays([1, 2], [3, 4]) // [1, 2, 3, 4]

//concat
const combineArrays1 = (arr1, arr2) => {
  return arr1.concat(arr2);
}

//spread operator
const combineArrays2 = (arr1, arr2) => {
  return [...arr1, ...arr2]
}

//push spread
const combineArrays3 = (arr1, arr2) => {
  arr1.push(...arr2);
  return arr1;
}

//for of
const combineArrays4 = (arr1, arr2) => {
  let result = [...arr1];
  for (let item of arr2) {
    result.push(item);
  }
  return result;
}

//reduce
const combineArrays5 = (arr1, arr2) => {
  return arr2.reduce((result, item) => {
    result.push(item);
    return result;
  }, [...arr1]);
}


console.log(combineArrays1([1, 2], [3, 4]));
console.log(combineArrays2([1, 2], [3, 4]));
console.log(combineArrays3([1, 2], [3, 4]));
console.log(combineArrays4([1, 2], [3, 4]));
console.log(combineArrays5([1, 2], [3, 4]));
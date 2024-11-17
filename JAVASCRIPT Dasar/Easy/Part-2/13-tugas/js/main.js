//13. Menggandakan Angka di Array
//Fungsi: doubleArray(arr)
//Parameter: arr (array of integers)
//Hint: Loop elemen dan kalikan dengan 2.
//Contoh Pemanggilan: doubleArray([1, 2, 3]) // [2, 4, 6]

//for loop
function doubleArray1(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++){
    result.push(arr[i] * 2);
  }
  return result;
}

//map
function doubleArray2(arr) {
  return arr.map(num => num * 2);
}

//for of
function doubleArray3(arr) {
  let result = [];

  for (let num of arr) {
    result.push(num * 2);
  }

  return result;
}

//reduce
function doubleArray4(arr) {
  return arr.reduce((result, num) => {
    result.push(num * 2);
    return result;
  }, []);
}

//rekursi
function doubleArray5(arr) {
  if (arr.length === 0) return [];
  return [arr[0] * 2, ...doubleArray2(arr.slice(1))];
}

console.log(doubleArray1([1, 2, 3]));
console.log(doubleArray2([1, 2, 3]));
console.log(doubleArray3([1, 2, 3]));
console.log(doubleArray4([1, 2, 3]));
console.log(doubleArray5([1, 2, 3]));
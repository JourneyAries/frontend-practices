//3. Jumlah Total dari Array
//Fungsi: sumArray(arr)
//Parameter: arr (array of integers)
//Hint: Loop elemen dalam array dan jumlahkan.
//Contoh Pemanggilan: sumArray([1, 2, 3]) // 6

// For loop
function sumArray1(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

// reduce
function sumArray2(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

// forEach
function sumArray3(arr) {
  let result = 0;
  arr.forEach((num) => {
    result += num;
  });
  return result;
}

//for..of
function sumArray4(arr) {
  let result = 0;
  for (const e of arr) {
    result += e;
  }

  return result;
}

//while
function sumArray5(arr) {
  let result = 0;
  let i = 0;
  while (i < arr.length) {
    result += arr[i];
    i++;
  }
}

console.log(sumArray1([1,2,3])); //Ouput: 6
console.log(sumArray2([1,2,3])); //Ouput: 6
console.log(sumArray3([1,2,3])); //Ouput: 6
console.log(sumArray4([1,2,3])); //Ouput: 6
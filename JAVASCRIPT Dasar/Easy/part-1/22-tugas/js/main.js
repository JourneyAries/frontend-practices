//22. Pengecekan Angka dalam Array
//Fungsi: isNumberInArray(arr, number)
//Parameter: arr (array of integers), number (integer)
//Hint: Gunakan loop atau metode includes.
//Contoh Pemanggilan: isNumberInArray([1, 2, 3], 2) // true

// for loop
function isNumberInArray1(arr, number) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === number) {
      return true;
    }
  }
  return false;
}

// includes
function isNumberInArray2(arr, number) {
  return arr.includes(number);
}

//forEach
function isNumberInArray3(arr, number) {
  let found = false;

  arr.forEach(item => {
    if (item === number) {
      found = true;
    }
  });
  return found;
}

//for of
function isNumberInArray4(arr, number) {
  for (let item of arr) {
    if (item === number) return true;
  }
  return false;
}

//reduce
function isNumberInArray5(arr, number) {
  return arr.reduce((result, item) => result || item == number, false);
}

console.log(isNumberInArray1([1, 2, 3], 2));
console.log(isNumberInArray2([1, 2, 3], 2));
console.log(isNumberInArray3([1, 2, 3], 2));
console.log(isNumberInArray4([1, 2, 3], 2));
console.log(isNumberInArray5([1, 2, 3], 2));
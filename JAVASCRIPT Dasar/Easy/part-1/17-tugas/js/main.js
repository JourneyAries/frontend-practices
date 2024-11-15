//17. Perkalian Angka di Array
//Fungsi: productArray(arr)
//Parameter: arr (array of integers)
//Hint: Loop dan kalikan elemen-elemen.
//Contoh Pemanggilan: productArray([1, 2, 3]) // 6

// cara biasa
function productArray1(arr) {
  if (arr.includes(0)) return 0;
  let result = 1;
  for (let i = 0; i < arr.length; i++){
    result *= arr[i];
  }

  return result;
}

//forEach
function productArray2(arr) {
  if (arr.includes(0)) return 0;
  let result = 1;
  arr.forEach(item => {
    result *= item;
  })

  return result;
}

//for of  
function productArray3(arr) {
  if (arr.includes(0)) return 0;
  let result = 1;

  for (let item of arr) {
    result *= item;
  }

  return result;
}

// reduce
function productArray4(arr) {
  return arr.reduce((result, item) => result * item, 1);
}


console.log(productArray1([1, 2, 3]));
console.log(productArray2([1, 2, 3]));
console.log(productArray3([1, 2, 3]));
console.log(productArray4([1, 2, 3]));
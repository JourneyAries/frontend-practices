//4. Mencari Angka Terbesar dalam Array
//Fungsi: findMax(arr)
//Parameter: arr (array of integers)
//Hint: Loop untuk cek elemen terbesar.
//Contoh Pemanggilan: findMax([3, 7, 1, 9]) // 9

//for loop
function findMax1(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++){
    if (max < arr[i]) {
      max = arr[i]
    }
  }

  return max;
}

//forEach
function findMax2(arr) {
  let max = 0;
  arr.forEach(i => {
    if (max < arr[i]) {
      max = arr[i]
    }
  });

  return max;
}

//for of
function findMax3(arr) {
  let max = 0;
  for (let i of arr) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max;
}

//max and spread operator
function findMax4(arr) {
  return Math.max(...arr);
}

// reduce (kurang begitu paham) 
function findMax5(arr) {
  return arr.reduce((a, b) => {
    return Math.max(a, b);
  }, arr[0]);
}


console.log(findMax1([3, 7, 1, 9])); //Output: 9
console.log(findMax2([3, 7, 1, 9])); //Output: 9
console.log(findMax3([3, 7, 1, 9])); //Output: 9
console.log(findMax4([3, 7, 1, 9])); //Output: 9
console.log(findMax5([3, 7, 1, 9])); //Output: 9
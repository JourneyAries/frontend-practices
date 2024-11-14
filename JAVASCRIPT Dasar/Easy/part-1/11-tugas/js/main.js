//11. Cari Index Elemen di Array
//Fungsi: findIndex(arr, target)
//Parameter: arr (array), target (integer)
//Hint: Loop dan cek apakah elemen cocok dengan target.
//Contoh Pemanggilan: findIndex([1, 2, 3], 2) // 1

// for loop biasa
function findIndex1(arr, target) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === target) {
      return i;
    }
  }
}

//forEach includes
function findIndex2(arr, target) {
  let index = -1;
  arr.forEach((item, i) => {
    if (item === target) {
      index = i;
    }
  });

  return index;
}

//for of
function findIndex3(arr, target) {
  for (let [i, item] of arr.entries()) {
    if (item === target) {
      return i;
    }
  }
  return -1;
}

//findIndex4
function findIndex4(arr, target) {
  return arr.findIndex(item => item === target);
}

//indexOf
function findIndex5(arr, target) {
  return arr.indexOf(target);
}

//reduce
function findIndex6(arr, target) {
  return arr.reduce((acc, item, index) => {
    return acc === -1 && item === target ? index : acc;
  }, -1);
}

console.log(findIndex1([1, 2, 3], 2));
console.log(findIndex2([1, 2, 3], 2));
console.log(findIndex3([1, 2, 3], 2));
console.log(findIndex4([1, 2, 3], 2));
console.log(findIndex5([1, 2, 3], 2));
console.log(findIndex6([1, 2, 3], 2));
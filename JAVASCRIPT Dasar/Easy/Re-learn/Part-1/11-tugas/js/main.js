//for()
//if()
let findIndex1 = (arr, target) =>{
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === target) return i;
  }
  return 'target tidak ditemukan.';
}

console.log(findIndex1([1, 2, 3], 2));

//forEach()
//if()
let findIndex2 = (arr, target) => {
  let finding = 'target tidak ditemukan.';
  arr.forEach((item, index) => {
    if (item === target) {
      finding = index;
    }
  })
  return finding;
}
console.log(findIndex2([1, 2, 3], 2));

//for(..of..)
//if()
//entries()
let findIndex3 = (arr, target) => {
  for (let [index, item] of arr.entries()) {
    if (item === target) {
      return index;
    }
  }
  return 'target tidak ditemukan.';
}
console.log(findIndex3([1, 2, 3], 2));

//findIndex()
//index()
let findIndex4 = (arr, target) => {
  const index = arr.findIndex(item => item === target);
  return index !== -1 ? index : 'target tidak ditemukan';

}
console.log(findIndex4([1, 2, 3], 2));

//reduce()
//itenary
let findIndex5 = (arr, target) => {
  return arr.reduce((result, item, index) => {
    return result === -1 && item === target ? index : result;
  }, -1)
}
console.log(findIndex5([1, 2, 3], 2));

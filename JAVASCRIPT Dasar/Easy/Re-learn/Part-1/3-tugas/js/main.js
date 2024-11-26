// for()
let sumArray1 = arr => {
  let result = 0;
  for (let i = 0; i < arr.length; i++){
    result += arr[i];
  }
  return result;
}
console.log(sumArray1([1, 2, 3]));

//reduce()
let sumArray2 = arr => {
  return arr.reduce((result, item) => result += item, 0);
}

console.log(sumArray2([1, 2, 3]));

//forEach
let sumArray3 = arr => {
  let result = 0;
  arr.forEach(item => {
    result += item;
  })
  return result;
}
console.log(sumArray3([1, 2, 3]));

//for(..of..)
let sumArray4 = arr => {
  let result = 0;
  for (let item of arr) {
    result += item; 
  }
  return result;
}

console.log(sumArray4([1, 2, 3]));

//while
let sumArray5 = arr => {
  let result = 0;
  let i = 0;
  while (i < arr.length) {
    result += arr[i];
    i++;
  }
  return result;
}

console.log(sumArray5([1, 2, 3]));
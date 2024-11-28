//includes
let isNumberInArray1 = (array, target) => {
  return array.includes(target)
}
console.log(isNumberInArray1([1, 2, 3], 2));

//for()
//if()
let isNumberInArray2 = (array, target) => {
  for (let i = 0; i < array.length; i++){
    if (array[i] === target) {
      return true;
    }
  }
  return false;
}
console.log(isNumberInArray2([1, 2, 3], 3));

//for(..of..)
//if()
let isNumberInArray3 = (array, target) => {
  for (let item of array) {
    if (item === target) {
      return true;
    }
  }
  return false;
}
console.log(isNumberInArray3([1, 2, 3], 3));

//reduce()
let isNumberInArray4 = (array, target) => {
  return array.reduce((result, item) => result || item === target, false);
}

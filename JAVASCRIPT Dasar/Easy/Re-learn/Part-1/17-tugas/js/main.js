//for()
//if()
let multiplyElements1 = arr => {
  let result = 1;
  if (arr.includes(0)) return 0;
  for (let i = 0; i < arr.length; i++){
    result *= arr[i];
  }
  return result;
}
console.log(multiplyElements1([1, 2, 3]));

//forEach()
//if()
let multiplyElements2 = arr => {
  let result = 1;
  if (arr.includes(0)) return 0;
  arr.forEach(item => {
    result *= item;
  })
  return result;
}
console.log(multiplyElements2([1, 2, 3]));

//for(..of..)
//if()
//for()
let multiplyElements3 = arr => {
  let result = 1;
  if (arr.includes(0)) return 0;
  for (let item of arr) {
    result *= item;
  }
  return result;
}
console.log(multiplyElements3([1, 2, 3]));

//reduce()
let mutliplyElements4 = arr => {
  return arr.reduce((result, item) => result * item, 1);
}
console.log(mutliplyElements4([1, 2, 3]));
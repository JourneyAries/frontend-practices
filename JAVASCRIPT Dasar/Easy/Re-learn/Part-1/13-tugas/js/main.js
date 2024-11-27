//for()
//push()
let multiplyArrays1 = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++){
    newArr.push(arr1[i] * arr2[i]);
  }
  return newArr;
}
console.log(multiplyArrays1([1, 2], [3, 4]));

//forEach()
//push()
let multiplyArrays2 = (arr1, arr2) => {
  let newArr = [];
  arr1.forEach((item, index) => {
    newArr.push(item * arr2[index]);
  })
  return newArr;
}
console.log(multiplyArrays2([1, 2], [3, 4]));

//for(..of..)
//entries()
//push()
let multiplyArrays3 = (arr1, arr2) => {
  let newArr = [];
  for (let [index, item] of arr1.entries()) {
    newArr.push(item * arr2[index]);
  }
  return newArr;
}
console.log(multiplyArrays3([1, 2], [3, 4]));

//map()
let multiplyArrays4 = (arr1, arr2) => {
  return arr1.map((item, index) => item * arr2[index]);
}
console.log(multiplyArrays4([1, 2], [3, 4]));

//reduce()
//push()
let multiplyArrays5 = (arr1, arr2) => {
  return arr1.reduce((newArr, item, index) => {
    newArr.push(item * arr2[index]);
    return newArr;
  },[])
}
console.log(multiplyArrays5([1, 2], [3, 4]));
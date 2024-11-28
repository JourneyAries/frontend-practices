//for()
//if()
let longestStringLength1 = arr => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++){
    if (counter < arr[i].length) {
      counter = arr[i].length;
    }
  }
  return counter;
}
console.log(longestStringLength1(["a", "abcd", "abc"]));

//forEach()
let longestStringLength2 = arr => {
  let counter = 0;
  arr.forEach(item => {
    if (counter < item.length) {
      counter = item.length;
    }
  })
  return counter;
}
console.log(longestStringLength2(["a", "abcd", "abc"]));

//reduce
let longestStringLength3 = arr => {
  return arr.reduce((counter, item) => {
    if (counter < item.length) {
      counter = item.length;
    }
    return counter;
  },0)
}
console.log(longestStringLength3(["a", "abcd", "abc"]));

//for(..of..)
//if()
let longestStringLength4 = arr => {
  let counter = 0;
  for (let item of arr) {
    if (counter < item.length) {
      counter = item.length;
    }
  }
  return counter;
}
console.log(longestStringLength4(["a", "abcd", "abc"]));

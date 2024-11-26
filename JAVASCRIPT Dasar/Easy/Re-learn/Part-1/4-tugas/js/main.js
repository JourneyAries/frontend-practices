//for()
let findMax1 = arr => {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++){
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

console.log(findMax1([3, 7, 1, 9]));

//forEach()
let findMax2 = arr => {
  let maxNum = 0;
  arr.forEach(item => {
    if (maxNum < item) {
      maxNum = item;
    }
  });
  return maxNum;
}

console.log(findMax2([3, 7, 1, 9]));

// for(..of..)
let findMax3 = arr => {
  let maxNum = 0;
  for (let item of arr) {
    if (maxNum < item) {
      maxNum = item;
    }
  }
  return maxNum;
}

console.log(findMax3([3, 7, 1, 9]));

//Math.max(spread...)
let findMax4 = arr => {
  return Math.max(...arr);
}

console.log(findMax4([3, 7, 1, 9]));

//reduce()
  //Math.max()
let findMax5 = arr => {
  return arr.reduce((result, item) => {
    return Math.max(result, item);
  }, arr[0])
}

console.log(findMax5([3, 7, 1, 9]));

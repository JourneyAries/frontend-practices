//sort()
let consecutiveNumbers = arr => {
  return arr.sort((first, second) => first - second);
}

console.log(consecutiveNumbers([3, 2, 1]));

//nested for()
function consecutiveNumbers2(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length - 1 - i; j++){
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(consecutiveNumbers2([3, 2, 1]));
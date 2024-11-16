//23. Filter Bilangan Positif dari Array
//Fungsi: filterPositiveNumbers(arr)
//Parameter: arr (array of integers)
//Hint: Gunakan kondisi arr[i] > 0.
//Contoh Pemanggilan: filterPositiveNumbers([-1, 2, -3, 4]) // [2, 4]

//for loop
function filterPositiveNumbers1(arr) {
  let positiveArr = [];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
      positiveArr.push(arr[i]);
    }
  }
  return positiveArr;
}

//forEach
function filterPositiveNumbers2(arr) {
  let positiveArr = [];

  arr.forEach(item => {
    if (item > 0) {
      positiveArr.push(item);
    }
  })

  return positiveArr;
}

//for of
function filterPositiveNumbers3(arr) {
  let positiveArr = [];

  for (let item of arr) {
    if (item > 0) {
      positiveArr.push(item);
    }
  }

  return positiveArr;
}

//filter
function filterPositiveNumbers4(arr) {
  return arr.filter(item => item > 0);
}

//reduce
function filterPositiveNumbers5(arr) {
  return arr.reduce((positiveArr, item) => {
    if (item > 0) {
      positiveArr.push(item);
    }
    return positiveArr;
  }, []);  
}

//flatMap
function filterPositiveNumbers6(arr) {
  return arr.flatMap(item => (item > 0 ? [item] : []));
}

//spread operator dan filter manual
function filterPositiveNumbers7(arr) {
  let positiveArr = [];
  for (let item of arr) {
    if (item > 0) {
      positiveArr = [...positiveArr, item]
    }
  }
  return positiveArr;
}

//while
function filterPositiveNumbers8(arr) {
  let positiveArr = [];
  let i = 0;

  while (i < arr.length) {
    if (arr[i] > 0) {
      positiveArr.push(arr[i]);
    }
    i++;
  }
  return positiveArr;
}

//set
function filterPositiveNumbers9(arr) {
  return Array.from(new Set(arr.filter(item => item > 0)));
}

//for lopp kedua
function filterPositiveNumbers10(arr) {
  let positiveArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
      positiveArr[positiveArr.length] = arr[i];
    }
  }
  return positiveArr;
}

//rekursif
function filterPositiveNumbers11(arr) {
  if (arr.length === 0) {
    return [];
  }

  const [first, ...rest] = arr;
  return (first > 0 ? [first] : []).concat(filterPositiveNumbers11(rest));
}

console.log(filterPositiveNumbers1([-1, 2, -3, 4]));
console.log(filterPositiveNumbers2([-1, 2, -3, 4]));
console.log(filterPositiveNumbers3([-1, 2, -3, 4]));
console.log(filterPositiveNumbers4([-1, 2, -3, 4]));
console.log(filterPositiveNumbers5([-1, 2, -3, 4]));
console.log(filterPositiveNumbers6([-1, 2, -3, 4]));
console.log(filterPositiveNumbers7([-1, 2, -3, 4]));
console.log(filterPositiveNumbers8([-1, 2, -3, 4]));
console.log(filterPositiveNumbers9([-1, 2, -3, 4]));
console.log(filterPositiveNumbers10([-1, 2, -3, 4]));
console.log(filterPositiveNumbers11([-1, 2, -3, 4]));
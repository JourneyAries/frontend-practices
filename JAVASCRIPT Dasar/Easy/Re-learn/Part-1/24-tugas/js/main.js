//for()
//if()
//push()
let filterPositiveNumbers1 = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filterPositiveNumbers1([-1, 2, -3, 4]));

//forEach()
//if()
//push()
let filterPositiveNumbers2 = arr => {
  let newArr = [];
  arr.forEach(item => {
    if (item > 0) {
      newArr.push(item);
    }
  })
  return newArr;
}
console.log(filterPositiveNumbers2([-1, 2, -3, 4]));

//for(..of..)
//if()
//push()
let filterPositiveNumbers3 = arr => {
  let newArr = [];
  for (let item of arr) {
    if (item > 0) {
      newArr.push(item);
    }
  }
  return newArr;
}
console.log(filterPositiveNumbers3([-1, 2, -3, 4]));

//filter()
let filterPositiveNumbers4 = arr => {
  return arr.filter(item => item > 0);
}
console.log(filterPositiveNumbers4([-1, 2, -3, 4]));

//reduce()
//if()
//push()
let filterPositiveNumbers5 = arr => { 
  return arr.reduce((newArr, item) => {
    if (item > 0) {
       newArr.push(item)
    }
    return newArr;
  }, [])
}
console.log(filterPositiveNumbers5([-1, 2, -3, 4]));

//flatMap()
//itenary
let filterPositiveNumbers6 = arr => {
  return arr.flatMap(item => (item > 0 ? [item] : []));
}
console.log(filterPositiveNumbers6([-1, 2, -3, 4]));

//spread...
//for(..of..)
//if()
//spread...
let filterPositiveNumbers7 = arr => {
  let newArr = [];
  for (let item of arr) {
    if (item > 0) {
      newArr = [...newArr, item];
    }
  }
  return newArr;
}
console.log(filterPositiveNumbers7([-1, 2, -3, 4]));

//while()
//if()
//push()
let filterPositiveNumbers8 = arr => {
  let newArr = [];
  let i = 0;

  while (i < arr.length) {
    if (arr[i] > 0) {
      newArr.push(arr[i]);
    }
    i++;
  }
  return newArr;
}
console.log(filterPositiveNumbers8([-1, 2, -3, 4]));

//Array.from()
//new Set()
//filter() 
function filterPositiveNumbers9(arr) {
  return Array.from(new Set(arr.filter(item => item > 0)));
}
console.log(filterPositiveNumbers9([-1, 2, -3, 4]));


//for()
//if()
//array[]
function filterPositiveNumbers10(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}
console.log(filterPositiveNumbers10([-1, 2, -3, 4]));

//Recursive()
//if()
//spread…
//itenary
//concat()
function filterPositiveNumbers11(arr) {
  if (arr.length === 0) {
    return [];
  }
  const [first, ...rest] = arr;
  return (first > 0 ? [first] : []).concat(filterPositiveNumbers11(rest));
}
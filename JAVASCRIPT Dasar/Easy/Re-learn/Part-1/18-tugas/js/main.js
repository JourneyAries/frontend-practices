//for()
//if()
//modulus %
//push
let filterEvenNumbers1 = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filterEvenNumbers1([1, 2, 3, 4]));

//forEach()
//if()
//modulus %
//push()
let filterEvenNumbers2 = arr => {
  let newArr = [];
  arr.forEach(item => {
    if (item % 2 === 0) {
      newArr.push(item);
    }
  })
  return newArr;
}
console.log(filterEvenNumbers2([1, 2, 3, 4]));

//for(..of..)
//if()
//modulus %
//push()
let filterEvenNumbers3 = arr => {
  let newArr = [];
  for (let item of arr) {
    if (item % 2 === 0) {
      newArr.push(item);
    }
  }
  return newArr;
}
console.log(filterEvenNumbers3([1, 2, 3, 4]));

//filter()
//modulus %
let filterEvenNumbers4 = arr => {
  return arr.filter(item => item % 2 === 0);
}
console.log(filterEvenNumbers4([1, 2, 3, 4]));

//reduce()
//if()
//modulus %
let filterEvenNumbers5 = arr => {
  return arr.reduce((newArr, item) => {
    if (item % 2 === 0) {
      newArr.push(item);
    }
    return newArr;
  },[])
}
console.log(filterEvenNumbers5([1, 2, 3, 4]));

//map()
//itenary
//filter()
let filterEvenNumbers6 = arr => {
  return arr.map(item => (item % 2 === 0 ? item : null))
    .filter(item => item !== null);
}
console.log(filterEvenNumbers6([1, 2, 3, 4]));

//some()
//if()
//not !
//modulus %
//filter()
let filterEvenNumbers7 = arr => {
  if (!arr.some(item => item % 2 === 0)) return [];
  return arr.filter(item => item % 2 === 0);
}

//flatmap()
//itenary
//modulus %
let filterEvenNumbers8 = arr => {
  return arr.flatMap(item => item % 2 === 0 ? [item] : []);
}
console.log(filterEvenNumbers8([1, 2, 3, 4]));

//recursive
//if()
//spread...
//modulus %
let filterEvenNumbers9 = arr => {
  if (arr.length === 0) return [];
  const [first, ...rest] = arr;
  if (first % 2 === 0) {
    return [first, ...filterEvenNumbers9(rest)];
  }
  return filterEvenNumbers9(rest)
}
console.log(filterEvenNumbers9([1, 2, 3, 4]));

//function generator *
//for(..of..)
//if()
//modulus()
function* filterEvenNumbers10(arr) {
  for (let item of arr) {
    if (item % 2 === 0) yield item;
  }
}
console.log([...filterEvenNumbers10([1, 2, 3, 4])]);

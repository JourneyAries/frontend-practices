//[..spread]
//new
//set()
let removeDuplicates1 = arr => {
  return [...new Set(arr)]
}
console.log(removeDuplicates1([1, 2, 2, 3]));

//Array.from()
//new
//set()
let removeDuplicates2 = arr => {
  return Array.from(new Set(arr));
}
console.log(removeDuplicates2([1, 2, 2, 3]));

//for()
//if()
//not !
//includes()
//push()
let removeDuplicates3 = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (!newArr.includes(i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(removeDuplicates3([1, 2, 2, 3]));

//forEach()
//not !
//includes()
//push()
let removeDuplicates4 = arr => {
  let newArr = [];
  arr.forEach(item => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  })
  return newArr;
}
console.log(removeDuplicates4([1, 2, 2, 3]));

//filter
//indexOf()
//includes()
let removeDuplicates6 = arr => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates6([1, 2, 3, 2]));

//reduce()
//not !
//includes
//push()
let removeDuplicates7 = arr => {
  return arr.reduce((newArr, item) => {
    if (!newArr.includes(item)) newArr.push(item);
    return newArr;
  },[]);
}
console.log(removeDuplicates7([1, 2, 3, 2]));

//map()
//forEach()
//not !
//set()
let removeDuplicates8 = arr => {
  const seen = new Map();

  arr.forEach(item => {
    if (!seen.has(item)) {
      seen.set(item, true);
    }
  })
  return Array.from(seen.keys());
}
console.log(removeDuplicates8([1, 2, 3, 2]));

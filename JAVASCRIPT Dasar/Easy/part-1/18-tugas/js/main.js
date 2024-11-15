//18. Filter Angka Genap dari Array
//Fungsi: filterEvenNumbers(arr)
//Parameter: arr (array of integers)
//Hint: Cek arr[i] % 2 === 0 untuk setiap elemen.
//Contoh Pemanggilan: filterEvenNumbers([1, 2, 3, 4]) // [2, 4]


//for loop
function filterEvenNumbers1(arr) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

//forEach
function filterEvenNumbers2(arr) {
  let filteredArr = [];

  arr.forEach(item => {
    if (item % 2 === 0) {
      filteredArr.push(item);
    }
  });
  return filteredArr;
}

// for of
function filterEvenNumbers3(arr) {
  let filteredArr = [];

  for (let item of arr) {
    if (item % 2 === 0) {
      filteredArr.push(item);
    }
  }
  return filteredArr;
}

//filter
function filterEvenNumbers4(arr) {
  return arr.filter(item => item % 2 === 0);
}

//reduce
function filterEvenNumbers5(arr) {
  return arr.reduce((filteredArr, item) => {
    if (item % 2 === 0) {
      filteredArr.push(item);
    }
    return filteredArr;
  },[]);
}

//map
function filterEvenNumbers6(arr) {
  return arr.map(item => (item % 2 === 0 ? item : null)).filter(item => item !== null);
}

//some
function filterEvenNumbers7(arr) {
  if (!arr.some(item => item % 2 === 0)) return [];
  return arr.filter(item => item % 2 === 0);
}

//flatmap
function filterEvenNumbers8(arr) {
  return arr.flatMap(item => (item % 2 === 0 ? [item] : []));
}

//rekursif
function filterEvenNumbers9(arr) {
  if (arr.length === 0) return [];
  const [first, ...rest] = arr;
  if (first % 2 === 0) {
    return [first, ...filterEvenNumbers9(rest)];
  }
  return filterEvenNumbers9(rest);
}

//function generator
function* filterEvenNumbers10(arr) {
  for (let item of arr) {
    if (item % 2 === 0) yield item;
  }
}


console.log(filterEvenNumbers1([1, 2, 3, 4]));
console.log(filterEvenNumbers2([1, 2, 3, 4]));
console.log(filterEvenNumbers3([1, 2, 3, 4]));
console.log(filterEvenNumbers4([1, 2, 3, 4]));
console.log(filterEvenNumbers5([1, 2, 3, 4]));
console.log(filterEvenNumbers6([1, 2, 3, 4]));
console.log(filterEvenNumbers7([1, 2, 3, 4]));
console.log(filterEvenNumbers8([1, 2, 3, 4]));
console.log(filterEvenNumbers9([1, 2, 3, 4]));
console.log([...filterEvenNumbers10([1,2,3,4])]);
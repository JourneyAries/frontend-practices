//3. Mengembalikan Array Angka Ganjil
//Fungsi: oddNumbers(arr)
//Parameter: arr (array of integers)
//Hint: Filter elemen array yang memenuhi kondisi % 2 !== 0.
//Contoh Pemanggilan: oddNumbers([1, 2, 3, 4]) // [1, 3]

//filter
const oddNumbers1 = arr => {
  return arr.filter(item => item % 2 === 0);
}

//for loop 
const oddNumbers2 = arr => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//forEach
const oddNumbers3 = arr => {
  let newArr = [];

  arr.forEach(item => {
    if (item % 2 === 0) {
      newArr.push(item);
    }
  })

  return newArr;
}

//for of
const oddNumbers4 = arr => {
  let newArr = [];

  for (let item of arr) {
    if (item % 2 === 0) {
      newArr.push(item);
    }
  }

  return newArr;
}

console.log(oddNumbers1([1, 2, 3, 4]));
console.log(oddNumbers2([1, 2, 3, 4]));
console.log(oddNumbers3([1, 2, 3, 4]));
console.log(oddNumbers4([1, 2, 3, 4]));
//21. Menambahkan Awalan pada Setiap Elemen Array
//Fungsi: addPrefix(arr, prefix)
//Parameter: arr (array), prefix (string)
//Hint: Loop tiap elemen, tambahkan prefix.
//Contoh Pemanggilan: addPrefix(["dog", "cat"], "my") // ["mydog", "mycat"]

//for loop
function addPrefix1(arr, prefix) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(prefix + arr[i]);
  }
  return newArr;
}

//map
function addPrefix2(arr, prefix) {
  return arr.map(item => prefix + item)
}

//forEach
function addPrefix3(arr, prefix) {
  let newArr = [];

  arr.forEach(item => {
    newArr.push(prefix + item);
  })

  return newArr;
}

//reduce
function addPrefix4(arr, prefix) {
  return arr.reduce((newArr, item) => {
    newArr.push(prefix + item);
    return newArr;
  }, [])
}

//spread Operator
function addPrefix5(arr, prefix) {
  return [...arr.map(item => prefix + item)];
}

console.log(addPrefix1(["dog", "cat"], "my"));
console.log(addPrefix2(["dog", "cat"], "my"));
console.log(addPrefix3(["dog", "cat"], "my"));
console.log(addPrefix4(["dog", "cat"], "my"));
console.log(addPrefix5(["dog", "cat"], "my"));
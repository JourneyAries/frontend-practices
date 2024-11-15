//15. Hitung Panjang String Terpanjang dalam Array
//Fungsi: longestStringLength(arr)
//Parameter: arr (array of strings
//Hint: Loop setiap string, cek panjangnya.
//Contoh Pemanggilan: longestStringLength(["a", "abcd", "abc"]) // 4


//for loop
function longestStringLength1(arr) {
  let longestArr = 0;

  for (let i = 0; i < arr.length; i++){
    if (longestArr < arr[i].length) {
      longestArr = arr[i].length;
    }
  }
  return longestArr;
}

//forEach
function longestStringLength2(arr) {
  let longestArr = 0;

  arr.forEach(item => {
    if (longestArr < item.length) {
      longestArr = item.length;
    }
  })
  return longestArr;
}

// reduce
function longestStringLength3(arr) {
  return arr.reduce((longestArr, item) => Math.max(longestArr, item.length), 0);
}

// for of
function longestStringLength4(arr) {
  let longestArr = 0;

  for (let item of arr) {
    if (longestArr < item.length) {
      longestArr = item.length;
    }
  }
  return longestArr;
}


console.log(longestStringLength1(["a", "abcd", "abc"]));
console.log(longestStringLength2(["a", "abcd", "abc"]));
console.log(longestStringLength3(["a", "abcd", "abc"]));
console.log(longestStringLength4(["a", "abcd", "abc"]));
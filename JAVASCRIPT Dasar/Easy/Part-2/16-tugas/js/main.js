//16. Membalik Array
//Fungsi: reverseArray(arr)
//Parameter: arr (array)
//Hint: Gunakan metode .reverse.
//Contoh Pemanggilan: reverseArray([1, 2, 3]) // [3, 2, 1]

//reverse
function reverseArray1(arr) {
  return arr.reverse();
}

//for loop
function reverseArray2(arr) {
  let reverse = [];

  for (let i = arr.length -1; i >= 0; i--){
    reverse.push(arr[i]);
  }

  return reverse;
}

console.log(reverseArray1([1, 2, 3]));
console.log(reverseArray2([1, 2, 3]));
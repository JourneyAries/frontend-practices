//23. Menampilkan Bilangan yang Berurutan dalam Array
//Fungsi: consecutiveNumbers(arr)
//Parameter: arr (array of integers)
//Hint: Sort array lalu loop untuk cek urutan.
//Contoh Pemanggilan: consecutiveNumbers([3, 2, 1]) // true

//sort
function consecutiveNumbers1(arr) {
  return arr.sort((a, b) => a - b);
}

//for loop
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


console.log(consecutiveNumbers1([3, 2, 1]));
console.log(consecutiveNumbers2([3, 2, 1]));
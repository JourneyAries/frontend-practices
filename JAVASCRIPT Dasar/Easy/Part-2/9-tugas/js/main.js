//9. Cek Array Berisi Semua Bilangan Positif
//Fungsi: allPositive(arr)
//Parameter: arr (array of integers)
//Hint: Loop untuk cek jika ada elemen ≤ 0.
//Contoh Pemanggilan: allPositive([1, 2, 3]) // true

//for loop
const allPositive1 = arr => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0) return false;
  }
  return true;
}

//forEach
const allPositive2 = arr => {
  let positive = true;
  arr.forEach(i => {
    if (i < 0) {
      positive = false;
    }
  });
  return positive;
}

//for of
const allPositive3 = arr => {
  for (let item of arr) {
    if (item < 0) return false;
  }
  return true;
}

console.log(allPositive1([1, 2, 3]));
console.log(allPositive2([1, 2, 3]));
console.log(allPositive3([1, 2, 3]));

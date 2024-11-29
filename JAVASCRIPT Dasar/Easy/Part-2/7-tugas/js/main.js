//7. Menghitung Jumlah Elemen di Array
//Fungsi: countElements(arr)
//Parameter: arr (array)
//Hint: Gunakan properti .length.
//Contoh Pemanggilan: countElements([1, 2, 3]) // 3

//length
const countElements1 = arr => {
  return arr.length;
}

//for of
const countElements2 = arr => {
  let count = 0;
  for (let _ of arr) {
    count++;
  }
  return count;
}

//reduce
const countElements3 = arr => {
  return arr.reduce(count => count + 1, 0)
}

console.log(countElements1([1, 2, 3]));
console.log(countElements2([1, 2, 3]));
console.log(countElements3([1, 2, 3]));
//6. Mengecek Apakah Semua Elemen Berurutan
//Buat fungsi isConsecutive(arr) yang menerima array arr dan memeriksa apakah semua elemen dalam array tersebut berurutan (angka bertambah 1).

function isConsecutive(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let isConsecutive = true;

  // Gunakan sortedArr, bukan arr
  sortedArr.forEach((value, index) => {
    if (index > 0 && value !== sortedArr[index - 1] + 1) {
      isConsecutive = false;
    }
  });
  
  return isConsecutive;
}

console.log(isConsecutive([1, 2, 3, 4]));
console.log(isConsecutive([1, 3, 2, 4]));
console.log(isConsecutive([1, 3, 5]));

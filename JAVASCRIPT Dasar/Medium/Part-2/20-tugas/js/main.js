//20. Menjumlahkan Nilai dalam Array dengan Kriteria
//Buat fungsi sumWithCondition(arr, condition) yang menjumlahkan nilai dalam array berdasarkan kriteria yang ditentukan oleh fungsi condition.

function sumWithCondition(arr, condition) {
  return arr.reduce((sum, num) => {
    if (condition(num)) {
      return sum + num;
    }
    return sum;
  },0);
}

console.log(sumWithCondition([1, 2, 3, 4], (num) => num % 2 === 0));
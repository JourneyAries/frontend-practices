//24: Menghitung Jumlah Angka Positif dalam Array Menggunakan filter()
//Buat fungsi countPositiveNumbers(arr) yang menghitung jumlah angka positif dalam array menggunakan filter().
//countPositiveNumbers([1, -2, 3, 4, -5]);  // Output: 3


function countPositiveNumbers(arr) {
  return arr.filter(num => num > 0).length;
}

console.log(countPositiveNumbers([1, -2, 3, 4, -5]));

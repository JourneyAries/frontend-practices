// 20. Kalkulasi Nilai Rata-Rata
// Buat fungsi calculateAverage(numbers) untuk menghitung rata-rata dari array angka.

// Hint:
// Jumlahkan semua elemen array.
// Bagi hasil dengan panjang array.

// console.log(calculateAverage([10, 20, 30])); Output: 20

//reduce 
function calculateAverage1(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

console.log(calculateAverage1([10, 20, 30]));

//for loop
function calculateAverage2(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(calculateAverage2([10, 20, 30]));

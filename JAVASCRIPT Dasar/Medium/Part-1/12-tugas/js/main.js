// 12. Perhitungan BMI
// Buat fungsi calculateBMI(weight, height) untuk menghitung BMI.

// Hint:
// Rumus BMI: weight / (height * height).
  
// console.log(calculateBMI(70, 1.75)); // Output: ~22.86

const calculateBMI = (weight, height) => (weight / (height * height)).toFixed(2);

console.log(calculateBMI(70, 1.75));
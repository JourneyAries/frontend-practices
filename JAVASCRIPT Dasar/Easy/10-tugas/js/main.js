//10. Mencari Nilai Maksimum dan Minimum dalam Array
//Buat fungsi findMinMax(arr) yang mengembalikan objek dengan nilai maksimum dan minimum dari array angka yang diberikan
//Contoh: findMinMax([3, 7, 2, 8]) mengembalikan { min: 2, max: 8 }.


function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return `min: ${min} max: ${max}`;
}

console.log(findMinMax([3, 7, 2, 8]));
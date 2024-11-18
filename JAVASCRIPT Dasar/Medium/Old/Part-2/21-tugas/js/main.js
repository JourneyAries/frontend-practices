//3. Menentukan Apakah Semua Elemen Array Genap atau Ganjil
//Buat fungsi isAllEvenOrOdd(arr) yang mengembalikan true jika semua elemen array genap atau semua ganjil.

function isAllEvenOrOdd(arr) {
  const isEven = arr[0] % 2 === 0;
  return arr.every(num => (num % 2 === 0) === isEven);
}

console.log(isAllEvenOrOdd([2, 4, 6]));
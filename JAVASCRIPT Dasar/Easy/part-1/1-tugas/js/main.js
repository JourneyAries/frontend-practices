//1. Periksa Bilangan Ganjil atau Genap
//Fungsi: isOddOrEven(number)
//Parameter: number (integer)
//Hint: Gunakan % untuk cek apakah number habis dibagi 2.
//Contoh Pemanggilan: isOddOrEven(3) // "ganjil"

function isOddOrEven(num) {
  return num % 2 !== 0 ? 'ganjil' : 'genap';
}

console.log(isOddOrEven(3)); // Output: 'ganjil'
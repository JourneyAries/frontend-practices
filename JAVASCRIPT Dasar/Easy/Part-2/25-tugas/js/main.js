//25. Periksa Angka adalah Pangkat Dua
//Fungsi: isPowerOfTwo(num)
//Parameter: num (integer)
//Hint: Cek apakah angka dapat dibagi 2 terus-menerus hingga 1.
//Contoh Pemanggilan: isPowerOfTwo(8) // true

//perulangan dan pembagian
function isPowerOfTwo(num) {
  if (num <= 0) return false;
  while (num % 2 === 0) {
    num /= 2;
  }

  return num === 1;
}

//bitwise AND
function isPowerOfTwo2(num) {
  return num > 0 && (num & (num - 1)) === 0;
}

//logaritma
function isPowerOfTwo3(num) {
  if (num <= 0) return false;
  const logResult = Math.log(num) / Math.log(2);
  return logResult === Math.floor(logResult);
}

//rekursi
function isPowerOfTwo4(num) {
  if (num <= 0) return false;
  if (num === 1) return true;
  if (num % 2 !== 0) return false;
  return isPowerOfTwo4(num / 2);
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo2(8));
console.log(isPowerOfTwo3(8));
console.log(isPowerOfTwo4(8));
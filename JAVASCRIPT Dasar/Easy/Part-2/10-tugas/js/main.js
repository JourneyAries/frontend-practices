//10. Jumlah Digit dalam Angka
//Fungsi: countDigits(num)
//Parameter: num (integer)
//Hint: Ubah angka menjadi string dan hitung panjangnya.
//Contoh Pemanggilan: countDigits(12345) // 5

//toString().length
function countDigits1(num) {
  return num.toString().length;
}

//counter++
function countDigits2(num) {
  let counter = 0;
  for (let i = 0; i < num.toString().length; i++){
    counter++
  }

  return counter;
}

//Math.floor(num / 10)
function countDigits3(num) {
  let counter = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    counter++;
  }
  return counter;
}

//Math.floor(Math.log10(num)) + 1
function countDigits4(num) {
  return Math.floor(Math.log10(num)) + 1;
}

//toString().split('').length
function countDigits5(num) {
  return num.toString().split('').length;
}

//reduce
function countDigits6(num) {
  return num.toString().split('').reduce((result) => result + 1, 0);
}

console.log(countDigits1(12345));
console.log(countDigits2(12345));
console.log(countDigits3(12345));
console.log(countDigits4(12345));
console.log(countDigits5(12345));
console.log(countDigits6(12345));
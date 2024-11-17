//20. Konversi Angka Menjadi Array Digit
//Fungsi: numberToArray(num)
//Parameter: num (integer)
//Hint: Ubah angka ke string, lalu split dan konversi ke angka.
//Contoh Pemanggilan: numberToArray(123) // [1, 2, 3]

//cara pertama
function numberToArray1(num) {
  return num.toString().split('').map(Number);
}

//cara kedua
function numberToArray2(num){
  return Array.from(String(num), Number);
}

//cara ketiga
function numberToArray3(num) {
  return [...num.toString()].map(Number);
}


console.log(numberToArray1(123));
console.log(numberToArray2(123));
console.log(numberToArray3(123));
//6. Membalik Angka
//Fungsi: reverseNumber(num)
//Parameter: num (integer)
//Hint: Ubah angka ke string, balik, lalu konversi kembali ke integer.
//Contoh Pemanggilan: reverseNumber(123) // 321

//parseIn
const reverseNumber1 = num => {
  return parseInt(num.toString().split('').reverse().join(''));
}

//array spread operator
const reverseNumber2 = num => {
  let reversedString = [...num.toString()].reverse().join('');
  return parseInt(reversedString) * Math.sign(num);
  
}

console.log(reverseNumber1(123));
console.log(reverseNumber2(123));
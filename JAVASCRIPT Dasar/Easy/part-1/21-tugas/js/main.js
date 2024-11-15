//21. Hitung Bilangan Pangkat
//Fungsi: power(base, exponent)
//Parameter: base (integer), exponent (integer)
//Hint: Gunakan loop untuk mengalikan base sebanyak exponent kali.
//Contoh Pemanggilan: power(2, 3) // 8

//for loop cara pertama
function power1(base, exponent) {
  let result = 1;
  const exponentArr = Array(exponent).fill(base);
  for (let i = 0; i < exponentArr.length; i++){
    result *= exponentArr[i];
  }
  
  return result;
}

//for loop cara kedua
function power2(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++){
    result *= base;
  }

  return result;
}

//Math.pow
function power3(base, exponent) {
  return Math.pow(base, exponent);
}

//operator eksponensial
function power4(base, exponent) {
  return base ** exponent;
}

//rekursif
function power5(base, exponent) {
  if (exponent === 0) return 0;

  return base * power5(base, exponent -1);
}

console.log(power1(2, 3));
console.log(power2(2, 3));
console.log(power3(2, 3));
console.log(power4(2, 3));
console.log(power5(2, 3));
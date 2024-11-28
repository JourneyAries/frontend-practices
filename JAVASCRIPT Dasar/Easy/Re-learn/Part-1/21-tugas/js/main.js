//Math.pow()
let power1 = (base, exponent) => {
  return Math.pow(base, exponent);
}
console.log(power1(2, 3));

//for()
let power2 = (base, exponent) => {
  let result = 1;
  for (let i = 1; i <= exponent; i++){
    result *= base;
  }
  return result;
}
console.log(power2(2, 3));

//Operator Eksponensial
let power3 = (base, exponent) => {
  return base ** exponent;
}
console.log(power3(2, 3));

//for()
//Array()
//fill()
let power4 = (base, exponent) => {
  let result = 1;
  const arr = Array(exponent).fill(base);
  for (let i = 0; i < arr.length; i++){
    result *= arr[i];
  }
  return result;
}
console.log(power4(2, 3));

//Recursive()
//if()
function power5(base, exponent){
  if (exponent === 0) return 1;
  return base * power5(base, exponent - 1);
}
console.log(power5(2, 3));

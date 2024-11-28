//Function Declaration
function celsiusToFahrenheit1(celsius) {
  return (celsius * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit1(0));

//Function Expression
const celsiusToFahrenheit2 = function (celsius) {
  return (celsius * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit2(0));

//Arrow Function
const celsiusToFahrenheit3 = celsius => (celsius * 9 / 5) + 32
console.log(celsiusToFahrenheit3(0));
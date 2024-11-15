//16. Konversi Celsius ke Fahrenheit
//Fungsi: celsiusToFahrenheit(celsius)
//Parameter: celsius (integer)
//Hint: Gunakan rumus (celsius * 9/5) + 32.
//Contoh Pemanggilan: celsiusToFahrenheit(0) // 32

//cara biasa
function celsiusToFahrenheit1(celsius) {
  return (celsius * 9 / 5) + 32;
}

//arrow function
const celsiusToFahrenheit2 = celsius => (celsius * 9 / 5) + 32

//function expression
const celsiusToFahrenheit3 = function (celsius) {
  return (celsius * 9 / 5) + 32;
}


console.log(celsiusToFahrenheit1(0));
console.log(celsiusToFahrenheit2(0));
console.log(celsiusToFahrenheit3(0));
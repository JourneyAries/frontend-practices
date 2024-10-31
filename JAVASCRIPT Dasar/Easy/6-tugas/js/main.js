function celciusKeFahrenheit(celciusDeg) {
  return (celciusDeg * (9 / 5)) + 32;
}

function fahrenheitKeCelcius(fahrenheitDeg) {
  return (fahrenheitDeg - 32) * (5 / 9)
}

function celciusKeKelvin(celciusDeg) {
  return celciusDeg + 273.15;
}

function kelvinKeCelcius(kelvinDeg) {
  return kelvinDeg - 273.15;
}

function fahrenheitKeKelvin(fahrenheitDeg) {
  return (fahrenheitDeg - 32) * (5 / 9) + 273.15;
}

function kelvinKeFahrenheit(kelvinDeg) {
  return (kelvinDeg - 273.15) * (5 / 9) + 32;
}

console.log(celciusKeFahrenheit(0));
console.log(fahrenheitKeCelcius(0));
console.log(celciusKeKelvin(2));
console.log(kelvinKeCelcius(2));
console.log(fahrenheitKeKelvin(2));
console.log(kelvinKeFahrenheit(2));

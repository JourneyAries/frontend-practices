// Studi Kasus 3: Kalkulator dengan Constructor (Level 3 - Medium)

function Calculator() {
  this.result = 0;
}

Calculator.prototype.add = function (a, b) {
  this.result = a + b;
  return this.result;
};

Calculator.prototype.subtract = function (a, b) {
  this.result = a - b;
  return this.result;
};

Calculator.prototype.multiply = function (a, b) {
  this.result = a * b;
  return this.result;
};

Calculator.prototype.divide = function (a, b) {
  if (b === 0) {
    console.error('Error: Division by zero is not allowed.');
    return null;
  }
  this.result = a / b;
  return this.result;
};

const calc = new Calculator();

console.log(calc.add(5,3));
console.log(calc.subtract(5,3));
console.log(calc.multiply(5,3));
console.log(calc.divide(5,3));
console.log(calc.divide(5,0));
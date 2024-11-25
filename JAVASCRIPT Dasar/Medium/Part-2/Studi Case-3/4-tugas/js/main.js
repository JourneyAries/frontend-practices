// Studi Kasus 4: Kalkulator (Level 4 - Hard)

let Calculator = {
  result: 0,

  add(a, b) {
    this.result = a + b;
    return this.result;
  },
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  },

  multiply(a, b) {
    this.result = a * b;
    return this.result;
  },
  divide(a, b) {
    if (b === 0) {
      console.log('Pembagian 0 tidak diperbolehkan');
      return null;
    } else {
      this.result = a / b;
      return this.result;
    }
  },
}

console.log(Calculator.add(2, 5));
console.log(Calculator.subtract(2, 5));
console.log(Calculator.multiply(2, 5));
console.log(Calculator.divide(12, 2));
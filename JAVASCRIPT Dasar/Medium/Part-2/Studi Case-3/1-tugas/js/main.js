//Studi Kasus 1: Sistem Penghitung (Level 1 - Easy)

const Counter = {
  value: 10,
  add(amount) {
    this.value += amount;
  },
  substract(amount) {
    this.value -= amount;
  },
};

Counter.add(5);
console.log(Counter.value);

Counter.substract(2);
console.log(Counter.value);
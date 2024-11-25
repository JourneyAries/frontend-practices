// Studi Kasus 2: Menghitung Usia dengan Method di Prototype (Level 2 - Easy)

function Person(birthYear) {
  this.birthYear = birthYear;
}

const person1 = new Person(1990);

Person.prototype.calculateAge = function(currentYear) {
  return currentYear - this.birthYear;
}

console.log(person1.calculateAge(2024));
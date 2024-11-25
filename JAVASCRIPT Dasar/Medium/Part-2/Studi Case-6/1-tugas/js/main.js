//Studi Kasus 1: Menambahkan Method ke Prototype (Level 1 - Easy)
// Deskripsi: Buat objek sederhana menggunakan constructor function, dan tambahkan method pada prototype objek untuk menampilkan properti objek.

// object person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// method greet()
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
}

const person1 = new Person('Alice', 25);
person1.greet();


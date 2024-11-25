//Studi Kasus 3: Penerapan Inheritance dengan Prototype (Level 3 - Medium)
//Deskripsi: Buat objek Employee yang mewarisi dari objek Person, dan tambahkan method tambahan untuk menampilkan jabatan pekerjaan.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

function Employee(name, age, position) {
  Person.call(this, name, age);
  this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.displayPosition = function () {
  console.log(`position: ${this.position}`);
};

const employee1 = new Employee('Bob', 30, 'Software Developer');
employee1.greet();
employee1.displayPosition();
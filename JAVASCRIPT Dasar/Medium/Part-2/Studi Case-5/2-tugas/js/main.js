//Studi Kasus 2: Profil Pengguna dengan Constructor (Level 2 - Easy)

function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

User.prototype.displayInfo = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
}

const user1 = new User("John Doe", 30, "john@example.com");
const user2 = new User("Jane Smith", 25, "jane@example.com");

user1.displayInfo();
user2.displayInfo();
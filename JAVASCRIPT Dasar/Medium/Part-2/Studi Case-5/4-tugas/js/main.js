// Studi Kasus 4: Sistem Manajemen Karyawan (Level 4 - Hard)

function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
}

Employee.prototype.increaseSalary = function (percentage) {
  const total = (this.salary * percentage) / 100;
  this.salary += total;
  return this.salary;
}

const employee1 = new Employee("Alice", "Developer", 5000);
employee1.increaseSalary(10);
console.log(employee1.salary);

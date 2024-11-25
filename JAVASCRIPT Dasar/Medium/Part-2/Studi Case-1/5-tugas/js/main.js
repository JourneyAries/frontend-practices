// Studi Kasus 5: Sistem Manajemen Karyawan (Hard)

// Soal 1: Buat fungsi untuk membuat objek karyawan dengan properti name, position, dan salary.

let employees = [];

function createEmployee(name, position, salary, active) {
  return {
    name: name,
    position: position,
    salary: salary,
    active: active
  };
}

const employee1 = (createEmployee("Alice", "Manager", 5000, true));
const employee2 = (createEmployee("Bob", "Developer", 4000, true));
console.log(employee1);

// Soal 2: Buat fungsi untuk menambahkan karyawan ke dalam daftar karyawan.

function addEmployee(employees, employee) {
  return employees.push(employee);
}

addEmployee(employees, employee1);
addEmployee(employees, employee2);
console.log(employees);

// Soal 3: Buat fungsi untuk menghitung total gaji semua karyawan dalam daftar.
function calculateTotalSalaries(employees) {
  return employees.reduce((result, employee) => result + employee.salary,0);
}

const checkSalary = calculateTotalSalaries(employees);
console.log(checkSalary);

// Soal 4: Buat fungsi untuk memperbarui status karyawan menjadi "Inactive" berdasarkan nama.
function updateEmployeesStatus(employees, employeeName){
  return employees.map(employee => {
    if (employee.name === employeeName) {
      employee.active = false;
    }
    return employee;
  });
}

employees = updateEmployeesStatus(employees, 'Alice');
console.log(employees);

// Soal 5: Buat fungsi untuk mencari karyawan berdasarkan posisi dan mengembalikan informasi mereka.
function findEmployeesByPosition(employees, position) {
  return employees.filter(employee => employee.position === position);
}

const developer = findEmployeesByPosition(employees, 'Developer');
console.log(developer);
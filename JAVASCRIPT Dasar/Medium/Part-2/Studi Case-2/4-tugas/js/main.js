// Studi Kasus 4: Struktur Organisasi Perusahaan (Level 4 - Hard)
// Deskripsi: Buat objek untuk merepresentasikan struktur organisasi perusahaan.

// Detail Objek:

// Properti:
// companyName: nama perusahaan (string).
// departments: daftar departemen (nested array of objects):
// Setiap departemen memiliki properti:
//   name: nama departemen (string).
//   manager: nama manajer (string).
//   employees: array nama karyawan (string[]).
// Tugas:

// Buat objek perusahaan dengan setidaknya 2 departemen.
// Buat fungsi untuk menambahkan departemen baru.
// Buat fungsi untuk menghitung total jumlah karyawan di semua departemen.
// Function Name:

// addDepartment(company, department)
// getTotalEmployees(company)

function createCompany(companyName) {
  return {
    companyName: companyName,
    departments: [],
  }
}

const myCompany = createCompany("Tech Innovators");

function createDepartment(name, manager, employees) {
  return {
    name: name,
    manager: manager,
    employees: employees,
  }
}

const department1 = createDepartment("Engineering", "Alice", ["Bob", "Charlie", "Dave"]);
const department2 = createDepartment("Marketing", "Eve", ["Frank", "Grace"]);

function addDepartment(company, department) {
  company.departments.push(department);
}

addDepartment(myCompany, department1);
addDepartment(myCompany, department2);

console.log(myCompany);

function getTotalEmployees(company) {
  return company.departments.reduce((total, department) => {
    return total + department.employees.length;
  }, 0);
}

const totalEmployees = getTotalEmployees(myCompany);
console.log("Total Jumlah Karyawan:", totalEmployees);

addDepartment(myCompany, createDepartment("HR", "Hannah", ["Ivy", "Jack"]));
console.log("Struktur Organisasi Perusahaan Setelah Penambahan HR:", myCompany);

const newTotalEmployees = getTotalEmployees(myCompany);
console.log("Total Jumlah Karyawan Setelah Penambahan HR:", newTotalEmployees);


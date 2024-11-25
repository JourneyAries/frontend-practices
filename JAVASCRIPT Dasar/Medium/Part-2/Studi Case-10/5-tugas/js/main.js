// Studi Kasus 5: Transformasi Objek dengan reduce() dan map() (Level 5 - Very Hard)
// Deskripsi: Gunakan reduce() dan map() untuk melakukan transformasi kompleks pada objek.

const employees = [
  { name: "Alice", department: "HR", salary: 5000 },
  { name: "Bob", department: "IT", salary: 6000 }
];

function transformEmployeeData(employees) {
  // Menggunakan reduce() untuk menghitung total gaji
  const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
  
  // Menggunakan map() untuk membuat objek baru dengan nama dan gaji
  const nameAndSalary = employees.map(employee => ({ name: employee.name, salary: employee.salary }));

  console.log("Total Salary:", totalSalary); // Output: 11000
  console.log("Name and Salary:", nameAndSalary); 
  // Output: [{ name: "Alice", salary: 5000 }, { name: "Bob", salary: 6000 }]
}

transformEmployeeData(employees);

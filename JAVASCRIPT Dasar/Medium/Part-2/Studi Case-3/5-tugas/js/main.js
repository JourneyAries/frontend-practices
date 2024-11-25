// Studi Kasus 5: Sistem Karyawan (Level 5 - Very Hard)

let Company = {
  employees: [],
  addEmployee(employee) {
    this.employees.push(employee);
  },
  getTotalSalary() {
    return this.employees.reduce((result, employee) => result + employee.salary, 0);
  },
  displayEmployeeInfo() {
    this.employees.forEach(employee => {
      console.log(`Nama ${employee.name}, gaji ${employee.salary}`);
    });
  },
};

Company.addEmployee({name: 'John Doe', salary: 5000});
Company.addEmployee({name: 'John Smith', salary: 6000});
Company.addEmployee({ name: 'Johnson', salary: 4500 });

console.log('Total gaji semua karyawan: ' + Company.getTotalSalary());
console.log('Informasi Karyawan: ');
Company.displayEmployeeInfo();
// Tugas: Ambil properti dari object dengan nama berbeda

const obj = { name: 'alice', age: 25 };
const { name: fullName, age: yearsOld } = obj;
console.log(fullName);
console.log(yearsOld);
// Tugas: Gunakan default value untuk properti yang tidak ada

const obj = { name: 'alice' };
const { name, age = 30 } = obj;
console.log(name);
console.log(age);

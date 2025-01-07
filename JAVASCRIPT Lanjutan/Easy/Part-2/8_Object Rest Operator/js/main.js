// Tugas: Gunakan rest operator untuk mengambil sisa properti dalam object

const obj = { name: 'alice', age: 25, city: 'wonderland' };
const { name, ...rest } = obj;
console.log(name);
console.log(rest);

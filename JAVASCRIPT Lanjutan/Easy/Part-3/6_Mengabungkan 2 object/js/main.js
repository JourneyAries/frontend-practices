// Tugas: Gabungkan dua object menggunakan spread operator

const obj1 = { name: 'alice' };
const obj2 = { age: 25 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);
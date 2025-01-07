// Tugas: Gunakan destructuring untuk nested object

const obj = { user: { name: 'alice', age: 25 } };
const {
	user: { name, age },
} = obj;
console.log(name);
console.log(age);

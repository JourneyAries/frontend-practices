// Tugas: Destructuring object dengan nilai default dan nested object

const obj = { user: { name: 'alice' } };
const {
	user: { name, age = 30 },
} = obj;
console.log(name);
console.log(age);

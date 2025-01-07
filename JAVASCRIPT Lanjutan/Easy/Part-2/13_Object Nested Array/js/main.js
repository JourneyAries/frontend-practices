// Tugas: Destructuring object dengan nested array

const obj = { user: ['alice', 25], city: 'wonderland' };
const {
	user: [name, age],
	city,
} = obj;
console.log(name);
console.log(age);
console.log(city);

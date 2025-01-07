// Tugas: Destructuring array of objects

const users = [
	{ name: 'alice', age: 25 },
	{ name: 'bob', age: 30 },
];
const [{ name: firstUser }, { name: secondUser }] = users;
console.log(firstUser);
console.log(secondUser);

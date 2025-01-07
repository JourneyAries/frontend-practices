// Tugas: Destructuring dalam parameter fungsi dengan default value

function greet({ name, age = 18 }) {
	console.log(`Hello, ${name}, you are ${age} years old.`);
}

greet({ name: 'bob' });
greet({ name: 'Alice', age: 25 });

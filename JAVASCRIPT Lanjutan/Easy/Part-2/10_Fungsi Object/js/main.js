// Tugas: Gunakan destructuring untuk object dalam parameter fungsi

function printUser({ name, age }) {
	console.log(`Name: ${name}, age: ${age}`);
}

printUser({ name: 'bob', age: 30 });

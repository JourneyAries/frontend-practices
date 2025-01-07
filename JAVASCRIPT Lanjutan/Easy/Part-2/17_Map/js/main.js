// Tugas: Destructuring map untuk mengambil nilai berdasarkan key

const map = new Map([
	['name', 'alice'],
	['age', 25],
]);

const { name, age } = Object.fromEntries(map);
console.log(name);
console.log(age);

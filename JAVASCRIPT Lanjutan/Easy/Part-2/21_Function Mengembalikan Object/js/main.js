// Tugas: Fungsi yang mengembalikan object dan menggunakan destructuring

function createPerson(name, age) {
	return { name, age };
}

const { name, age } = createPerson('alice', 25);
console.log(name);
console.log(age);

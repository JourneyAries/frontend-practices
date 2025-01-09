// Tugas: Buat beberapa proses asinkron yang bergantung satu sama lain.

async function processSequential() {
	const result1 = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json());
	console.log(result1);
	const result2 = await fetch('https://jsonplaceholder.typicode.com/todos/${result1.id + 1}').then((res) => res.json());
	console.log(result2);
}

processSequential();

// Tugas: Gunakan `fetch` untuk mendapatkan data dari URL (misalnya, API JSON).

fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then((response) => response.json())
	.then((data) => console.log(data));

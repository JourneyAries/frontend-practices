// Tugas: Gunakan `Promise.all` untuk menunggu beberapa operasi `fetch` selesai.

async function fetchMultipleData() {
	const urls = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2'];
	const promises = urls.map((url) => fetch(url).then((response) => response.json()));
	const results = await Promise.all(promises);
	console.log(results);
}

fetchMultipleData();

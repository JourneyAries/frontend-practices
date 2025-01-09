// Tugas: Gunakan `fetch` dan tangani error jika permintaan gagal.
fetch('https://jsonplaceholder.typicode.com/nonexistent')
	.then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then((data) => console.log(data))
	.catch((error) => console.error('There was a problem with the fetch operation:', error));

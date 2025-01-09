// Tugas: Gunakan callback untuk menampilkan data setelah pengambilan data simulasi selesai.

function fetchData(callback) {
	setTimeout(() => {
		callback({ id: 1, name: 'alice' });
	}, 1000);
}

fetchData((data) => console.log(data));

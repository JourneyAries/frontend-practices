// Judul Tugas: Memfilter Daftar Tugas Berdasarkan Pencarian

// Pseudocode Lengkap:
// Buat input teks untuk mencari tugas.
// Buat sebuah daftar tugas di bawahnya.
// Setiap kali pengguna mengetik di input, filter daftar tugas sehingga hanya tugas yang mengandung kata kunci yang akan ditampilkan.
// Setiap tugas harus berupa elemen <li> dalam daftar <ul>.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan event listener input untuk menangani pencarian real-time.
// Gunakan filter() atau includes() untuk memfilter tugas yang ditampilkan.
// Gunakan textContent untuk mengambil teks dari setiap tugas.

const inputSearch = document.getElementById('search-input');
const listTask = document.querySelectorAll('#task-list li');

inputSearch.addEventListener('input', () => {
  const searching = inputSearch.value.toLowerCase();
  
	listTask.forEach((item) => {
		const taskText = item.textContent.toLowerCase();
		if (taskText.includes(searching)) {
			item.style.display = '';
		} else {
			item.style.display = 'none';
		}
	});
});

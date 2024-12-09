// Tugas 5: Menyaring Barang Berdasarkan Nama
// Pseudocode lengkap:
// 1. Tujuan:
//    Tambahkan fitur pencarian untuk menyaring daftar barang berdasarkan input pengguna.
// 2. Langkah-langkah kecil:
//    a. Buat elemen input pencarian untuk pengguna memasukkan kata kunci.
//    b. Buat event listener pada input pencarian untuk mendeteksi perubahan.
//    c. Setiap kali pengguna mengetikkan sesuatu di input:
//       - Dapatkan nilai pencarian dari input.
//       - Loop melalui elemen `<li>` di dalam daftar dan sembunyikan yang tidak sesuai dengan kata kunci.
// Cara berpikir / hack atau tips lengkap:
// - Gunakan `toLowerCase()` pada nilai input dan nama barang untuk membandingkan teks tanpa memperhatikan kapitalisasi.
// - Gunakan `style.display = 'none'` untuk menyembunyikan elemen yang tidak cocok dengan pencarian.

const searchInput = document.getElementById('searchInput');
const listItems = document.querySelectorAll('#itemList li');

searchInput.addEventListener('input', () => {
	const searchValue = searchInput.value.toLowerCase().trim();

	if (searchValue === '') {
		// Jika input kosong, tampilkan semua item
		listItems.forEach((item) => {
			item.style.display = '';
		});
	} else {
		// Jika input tidak kosong, filter item berdasarkan pencarian
		listItems.forEach((item) => {
			const itemText = item.textContent.toLowerCase();
			if (itemText.includes(searchValue)) {
				item.style.display = '';
			} else {
				item.style.display = 'none';
			}
		});
	}
});

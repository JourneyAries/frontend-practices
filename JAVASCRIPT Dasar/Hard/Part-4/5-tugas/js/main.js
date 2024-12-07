// Toggle Teks
// Pseudocode lengkap:
// Tangkap elemen paragraf dan tombol dengan ID masing-masing.
// Tambahkan event listener pada tombol.
// Dalam event listener:
// Periksa apakah paragraf sedang terlihat (gunakan style.display).
// Jika terlihat, ubah style.display menjadi none.
// Jika tidak terlihat, ubah style.display menjadi block.
// Cara berpikir / hack atau tips lengkap:
// Properti style.display berguna untuk menyembunyikan elemen (none) atau menampilkan elemen (block).
// Gunakan if atau operator ternary untuk menentukan aksi berdasarkan kondisi.

const teks = document.getElementById('teks');
const btnToggleTeks = document.getElementById('toggleTeks');

btnToggleTeks.addEventListener('click', () => {
	// if (teks.style.display === 'block') {
	// 	teks.style.display = 'none';
	// } else {
	// 	teks.style.display = 'block';
	// }

	teks.style.display = teks.style.display === 'block' ? 'none' : 'block';
});

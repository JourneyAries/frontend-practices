// Tugas 2: Menghapus Barang dari Daftar
// Pseudocode lengkap:
// 1. Tujuan:
//    Tambahkan fitur untuk menghapus barang dari daftar.
// 2. Langkah-langkah kecil:
//    a. Gunakan kode dari Tugas 1 sebagai dasar.
//    b. Ketika sebuah barang diklik (elemen `<li>`):
//       - Gunakan metode `.remove()` untuk menghapus item tersebut.
//    c. Pastikan fitur ini hanya menghapus item yang diklik.
// Cara berpikir / hack atau tips lengkap:
// - Tambahkan event listener pada elemen `<li>` setelah item ditambahkan.
// - Gunakan `element.remove()` untuk menghapus elemen yang diklik.

const container = document.querySelector('.container');
const itemList = document.getElementById('itemList');

container.addEventListener('click', (e) => {
	const targetLi = e.target.closest('li');
	if (targetLi && targetLi.parentNode.id === 'itemList') {
		targetLi.remove();
	}
});

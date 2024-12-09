// Tugas 1: Menambahkan Barang ke Daftar
// Pseudocode lengkap:
// 1. Tujuan:
//    Buatlah sebuah program sederhana untuk menambahkan nama barang ke dalam daftar (list).
// 2. Langkah-langkah kecil:
//    a. Buat elemen input untuk pengguna memasukkan nama barang.
//    b. Buat tombol "Tambah" untuk menambahkan nama barang ke dalam daftar.
//    c. Ketika tombol "Tambah" diklik:
//       - Ambil nilai dari input.
//       - Buat elemen `<li>` baru untuk menampilkan barang tersebut.
//       - Tambahkan elemen `<li>` ke dalam `<ul>` daftar barang.
//       - Kosongkan kembali input setelah barang ditambahkan.
// Cara berpikir / hack atau tips lengkap:
// - Fokus pada pengambilan nilai dari elemen input menggunakan `document.getElementById`.
// - Gunakan `createElement` untuk membuat elemen baru di DOM.
// - Gunakan `appendChild` untuk menambahkan elemen ke dalam daftar.

const container = document.querySelector('.container');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

container.addEventListener('click', (e) => {
	if (e.target.id === 'addButton') {
		if (itemInput.value.trim() === '') {
			let errorMessage = document.querySelector('.error-message');
			if (!errorMessage) {
				const errorMessage = document.createElement('p');
				errorMessage.textContent = 'Error: isi input terlebih dahulu';
				errorMessage.style.color = 'red';
				errorMessage.classList.add('error-message');
				container.appendChild(errorMessage);
			}
			return;
		}

		const itemValue = itemInput.value;
		const list = document.createElement('li');
		list.classList.add('item');
		list.textContent = itemValue;
		itemList.appendChild(list);
		itemInput.value = '';
	}

	let errorMessage = document.querySelector('.error-message');
	if (errorMessage) {
		errorMessage.remove();
	}
});

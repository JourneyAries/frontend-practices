// Tugas 3: Menghitung Total Barang dalam Daftar
// Pseudocode lengkap:
// 1. Tujuan:
//    Tambahkan fitur untuk menghitung jumlah barang yang ada di daftar.
// 2. Langkah-langkah kecil:
//    a. Gunakan kode dari Tugas 1 dan Tugas 2 sebagai dasar.
//    b. Buat elemen `<p>` untuk menampilkan total jumlah barang.
//    c. Setiap kali barang ditambahkan atau dihapus:
//       - Hitung jumlah elemen `<li>` dalam daftar.
//       - Update teks dalam elemen `<p>` untuk menampilkan jumlah terbaru.
// Cara berpikir / hack atau tips lengkap:
// - Gunakan `ul.children.length` untuk menghitung jumlah barang dalam daftar.
// - Perbarui elemen `<p>` setiap kali ada perubahan pada daftar.

const container = document.querySelector('.container');
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');
const totalItems = document.getElementById('totalItems');

const updateTotalItems = () => {
	totalItems.textContent = itemList.children.length;
};

container.addEventListener('click', (e) => {
	const itemValue = itemInput.value.trim();

	//tambah barang
	if (e.target.id === 'addButton') {
		//validasi
		if (itemValue === '') {
			let errorMessage = document.querySelector('.error-message');
			if (!errorMessage) {
				const errorMessage = document.createElement('p');
				errorMessage.classList.add('error-message');
				errorMessage.textContent = 'Error: inputan tidak boleh kosong';
				errorMessage.style.color = 'red';
				container.appendChild(errorMessage);
			}
			return;
		}

		const list = document.createElement('li');
		list.classList.add('item');
		list.textContent = itemValue;
		itemList.appendChild(list);
		itemInput.value = '';

		let errorMessage = document.querySelector('.error-message');
		if (errorMessage) {
			errorMessage.remove();
		}
	}

	if (e.target && e.target.className === 'item') {
		e.target.remove();
	}

	updateTotalItems();
});

container.addEventListener('input', (e) => {
	if (e.target === itemInput) {
		let errorMessage = document.querySelector('.error-message');
		if (itemInput.value.trim() !== '' && errorMessage) {
			errorMessage.remove();
		}
	}
});

updateTotalItems();

// Tugas 7: Menyimpan Daftar Barang dengan Local Storage
// Pseudocode lengkap:
// 1. Tujuan:
//    Tambahkan fitur untuk menyimpan daftar barang ke dalam browser local storage.
// 2. Langkah-langkah kecil:
//    a. Setelah menambahkan barang, simpan daftar barang dalam `localStorage`.
//    b. Ketika halaman dimuat, cek apakah ada daftar barang yang tersimpan di `localStorage`.
//    c. Tampilkan barang yang sudah tersimpan dari local storage.
// Cara berpikir / hack atau tips lengkap:
// - Gunakan `localStorage.setItem()` untuk menyimpan daftar barang.
// - Gunakan `localStorage.getItem()` untuk mengambil daftar barang yang tersimpan.
// - Jangan lupa untuk mengubah data menjadi format JSON dengan `JSON.stringify()` dan kembali ke array dengan `JSON.parse()`.

const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

function displayItems() {
	//ambil daftar dari localStorage
	const items = localStorage.getItem('items');

	if (items) {
		const itemArray = items.split(',');
		itemList.innerHTML = '';

		itemArray.forEach((item) => {
			const li = document.createElement('li');
			li.textContent = item;
			itemList.appendChild(li);
		});
	}
}

function addItem() {
	const itemName = itemInput.value.trim();

	if (itemName !== '') {
		// Ambil daftar barang yang ada dari localStorage
		let items = localStorage.getItem('items');

		if (items) {
			// Jika sudah ada barang, tambahkan item baru ke string yang ada
			items += ',' + itemName;
		} else {
			// Jika belum ada barang, buat string baru
			items = itemName;
		}

		// Simpan daftar barang yang sudah diperbarui ke localStorage
		localStorage.setItem('items', items);

		displayItems();
		itemInput.value = '';
	}
}

addButton.addEventListener('click', addItem);

document.addEventListener('DOMContentLoaded', displayItems);

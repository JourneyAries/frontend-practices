// Tugas 4: Mengedit Nama Barang di Daftar
// Pseudocode lengkap:
// 1. Tujuan:
//    Tambahkan fitur untuk mengedit nama barang di daftar.
// 2. Langkah-langkah kecil:
//    a. Gunakan kode dari Tugas 1 sebagai dasar.
//    b. Ketika barang di dalam daftar diklik, ubah teksnya menjadi input teks.
//    c. Setelah mengedit, barang kembali ke bentuk daftar dengan nama yang baru.
// Cara berpikir / hack atau tips lengkap:
// - Anda perlu mengganti elemen `<li>` menjadi elemen input ketika diklik.
// - Setelah mengedit, ubah kembali ke elemen `<li>` dengan nilai input yang baru.

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

	// Mengubah nama barang ketika diklik
	if (e.target.className === 'item') {
		const currentItem = e.target;
		const originalValue = currentItem.textContent;
		const inputField = document.createElement('input');
		inputField.type = 'text';
		inputField.value = currentItem.textContent;
		currentItem.textContent = '';
		currentItem.appendChild(inputField);
		inputField.focus();

		inputField.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				currentItem.textContent = inputField.value.trim() || originalValue;
			}
		});

		inputField.addEventListener('blur', () => {
			currentItem.textContent = inputField.value.trim() || originalValue;
		});
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

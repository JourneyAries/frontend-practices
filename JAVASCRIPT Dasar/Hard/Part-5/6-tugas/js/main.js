// Tugas 6: Menambahkan dan Menghapus Barang dengan Konfirmasi
// Pseudocode lengkap:
// 1. Tujuan:
//    Tambahkan fitur konfirmasi ketika pengguna ingin menghapus barang dari daftar.
// 2. Langkah-langkah kecil:
//    a. Gunakan kode dari Tugas 1 untuk menambahkan barang ke daftar.
//    b. Ketika barang dihapus:
//       - Tampilkan konfirmasi menggunakan `window.confirm()`.
//       - Hapus barang hanya jika pengguna mengonfirmasi untuk menghapus.
//    c. Tambahkan event listener pada tombol "Hapus" di dalam setiap item daftar.
// Cara berpikir / hack atau tips lengkap:
// - Gunakan `window.confirm()` untuk meminta konfirmasi dari pengguna sebelum menghapus barang.
// - Pastikan untuk hanya menghapus barang jika konfirmasi diklik "OK".

const container = document.querySelector('.container');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

container.addEventListener('click', (e) => {
	// Tombol Tambah Barang
	if (e.target.id === 'addButton') {
		// Validasi input kosong
		if (itemInput.value.trim() === '') {
			let errorMessage = document.querySelector('.error-message');
			if (!errorMessage) {
				errorMessage = document.createElement('p');
				errorMessage.textContent = 'Error: isi input terlebih dahulu';
				errorMessage.style.color = 'red';
				errorMessage.classList.add('error-message');
				container.appendChild(errorMessage);
			}
			return;
		}

		// Tambahkan barang ke daftar
		const itemValue = itemInput.value.trim();
		const listItem = document.createElement('li');
		listItem.innerHTML = `
      ${itemValue}
      <button class="removeButton">Hapus</button>
    `;
		itemList.appendChild(listItem);
		itemInput.value = '';

		const errorMessage = document.querySelector('.error-message');
		if (errorMessage) {
			errorMessage.remove();
		}
	}

  //tombol hapus barang
  if (e.target.classList.contains('removeButton')) {
    const confirmDelete = window.confirm('Yakin mau hapus?');
    if (confirmDelete) {
      e.target.parentElement.remove();
    }
  }
});
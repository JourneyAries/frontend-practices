// Menambah Elemen ke Daftar
// Pseudocode lengkap:
// Tangkap elemen ul dengan id="daftar".
// Tangkap input dan tombol dengan ID masing-masing.
// Tambahkan event listener pada tombol agar memicu fungsi saat diklik.
// Dalam fungsi:
// Ambil nilai dari input.
// Buat elemen li baru.
// Set teks elemen li dengan nilai input.
// Tambahkan elemen li ke dalam ul.
// Kosongkan input setelah ditambahkan.
// Cara berpikir / hack atau tips lengkap:
// Gunakan createElement('li') untuk membuat elemen HTML baru.
// Gunakan appendChild untuk menambahkan elemen baru ke dalam elemen lain.
// Gunakan properti value dari input untuk mengambil teks.

const daftar = document.getElementById('daftar');
const inputItem = document.getElementById('inputItem');
const btnTambahItem = document.getElementById('tambahItem');

btnTambahItem.addEventListener('click', () => {
	//validasi apakah inpu kosong atau tidak
	if (inputItem.value.trim() === '') {
		alert('Masukkan item sebelum menambahkannya!');
		return;
	}

	//main proses
	const newList = document.createElement('li');
	newList.textContent = inputItem.value;
	daftar.appendChild(newList);
	inputItem.value = '';
});

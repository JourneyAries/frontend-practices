// Mengubah Teks pada Halaman
// Pseudocode:
// Tangkap elemen <h1> menggunakan document.getElementById("title").
// Tangkap elemen tombol dengan document.getElementById("changeText").
// Set event listener pada tombol untuk mengubah teks di <h1> saat diklik.
// Cara Berpikir:
// Mengubah teks dapat dilakukan dengan properti innerText atau textContent pada elemen.
// Setel teks ke kalimat baru yang diinginkan.
// Upgrade Fitur Versi 2:
// Biarkan pengguna memasukkan teks baru melalui input field sebelum menekan tombol untuk mengubah teks.
// Upgrade Fitur Versi 3:
// Ubah juga warna teks dengan setiap perubahan teks.

const title = document.getElementById('title');
const changeText = document.getElementById('changeText');

changeText.addEventListener('click', () => {
	// title.textContent = 'Teks sudah digantikan';
	title.textContent = prompt('Masukan teks yang akan digantikan');
	title.style.color = 'blue';
});

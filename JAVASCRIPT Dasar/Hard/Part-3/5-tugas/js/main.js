// Random Color Generator
// JavaScript Pseudocode:
// Ambil elemen colorCode dan generateColor.
// Ketika tombol diklik, buat warna acak (kode hex) dan ubah warna latar belakang.
// Upgrade (Versi):
// Tambahkan fitur untuk menyalin kode warna ke clipboard.
// Tampilkan sejarah warna yang dihasilkan.

const changeColor = document.getElementById('change-color');
const currentColor = document.getElementById('current-color');

changeColor.addEventListener('click', () => {
	// document.body.style.backgroundColor = 'lightblue';

	let redColor = Math.floor(Math.random() * 256);
	let greenColor = Math.floor(Math.random() * 256);
	let blueColor = Math.floor(Math.random() * 256);

	let randomColor = `rgb(${redColor},${greenColor},${blueColor})`;
	document.body.style.backgroundColor = randomColor;
	currentColor.textContent = `Current Color: ${randomColor}`;
});

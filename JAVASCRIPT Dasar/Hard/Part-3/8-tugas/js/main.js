// Menghitung Jumlah Karakter di Input
// Pseudocode:
// Tangkap elemen input dan elemen <span> untuk menampilkan jumlah karakter.
// Tambahkan event listener pada elemen input yang memonitor event input.
// Setiap kali pengguna mengetik, hitung panjang teks menggunakan .value.length.
// Tampilkan jumlah karakter pada elemen <span>.
// Cara Berpikir:
// Properti .value dari elemen input memberi akses ke teks yang diketik pengguna.
// Gunakan .length untuk menghitung jumlah karakter dari teks tersebut.
// Upgrade Fitur Versi 2:
// Tambahkan batas karakter maksimal, misalnya 100, dan tampilkan peringatan jika melebihi batas.
// Upgrade Fitur Versi 3:
// Tambahkan penghitung jumlah kata selain jumlah karakter.

const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', () => {
  charCount.textContent = textInput.value.length;
})
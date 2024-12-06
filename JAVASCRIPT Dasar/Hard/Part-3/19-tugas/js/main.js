// Menampilkan Waktu UTC
// Pseudocode:
// Tangkap elemen <h1> dengan ID utcTime.
// Buat objek Date() untuk mendapatkan waktu sekarang.
// Gunakan metode .toUTCString() untuk mengonversi waktu ke format UTC.
// Tampilkan waktu UTC di dalam elemen <h1>.
// Cara Berpikir:
// .toUTCString() memberikan representasi waktu dalam format UTC (Coordinated Universal Time).
// Gunakan fungsi ini untuk mendapatkan waktu universal yang tidak dipengaruhi oleh zona waktu lokal.

const utcTime = document.getElementById('utcTime');
const today = new Date();

utcTime.textContent += today.toUTCString();

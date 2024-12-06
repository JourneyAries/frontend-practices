// Menampilkan Hari dalam Seminggu
// Pseudocode:
// Tangkap elemen <p> dengan ID dayOfWeek.
// Buat objek Date dengan new Date().
// Gunakan metode .getDay() untuk mendapatkan indeks hari (0 untuk Minggu, 1 untuk Senin, dll.).
// Gunakan array untuk mencocokkan indeks dengan nama hari (misalnya, ["Minggu", "Senin", ...]).
// Tampilkan nama hari di elemen <p>.
// Cara Berpikir:
// .getDay() menghasilkan angka (0-6), jadi gunakan array untuk menyimpan nama-nama hari.
// Indeks dari .getDay() digunakan untuk mengambil nama hari dari array.

const dayOfWeekElemenet = document.getElementById('dayOfWeek');

const today = new Date();
const dayIndex = today.getDay();
const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

dayOfWeek.textContent += daysOfWeek[dayIndex];

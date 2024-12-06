// Menampilkan Tanggal Hari Ini
// Pseudocode:
// Tangkap elemen <p> dengan ID todayDate.
// Buat objek Date menggunakan new Date().
// Gunakan metode .toDateString() untuk mendapatkan tanggal dalam format yang mudah dibaca.
// Tampilkan hasil di dalam elemen <p>.
// Cara Berpikir:
// Objek Date adalah representasi waktu saat ini.
// .toDateString() mengubah tanggal menjadi format string sederhana seperti "Mon Dec 04 2024".
// Tangkap elemen target, lalu gunakan .innerText untuk memasukkan teks.

const todayDate = document.getElementById('todayDate');

const currentDate = new Date();
todayDate.textContent += currentDate.toDateString();
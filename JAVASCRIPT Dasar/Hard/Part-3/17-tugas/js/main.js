// Menampilkan Tanggal dalam Format Tertentu
// Pseudocode:
// Tangkap elemen <p> dengan ID formattedDate.
// Buat objek Date() untuk mendapatkan tanggal saat ini.
// Gunakan metode .getDate(), .getMonth(), dan .getFullYear() untuk mengambil tanggal, bulan, dan tahun.
// Format tanggal menjadi DD/MM/YYYY.
// Tampilkan hasilnya di dalam elemen <p>.
// Cara Berpikir:
// Ingat bahwa bulan dimulai dari 0 (Januari = 0, Desember = 11), jadi pastikan menambahkan 1 pada bulan.
// Agar formatnya konsisten, gunakan padding dua digit untuk tanggal dan bulan yang kurang dari 10.

const formattedDate = document.getElementById('formattedDate');
const today = new Date();
const tanggal = String(today.getDate()).padStart(2, '0');
const bulan = String(today.getMonth() + 1).padStart(2, '0');
const tahun = today.getFullYear();

formattedDate.textContent = `${tanggal}/${bulan}/${tahun}`;

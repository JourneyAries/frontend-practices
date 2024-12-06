// Menghitung Umur Berdasarkan Tanggal Lahir
// Pseudocode:
// Tangkap elemen <p> dengan ID age.
// Tentukan tanggal lahir (misalnya, new Date('YYYY-MM-DD')).
// Gunakan objek Date() untuk mendapatkan tanggal saat ini.
// Hitung selisih antara tanggal lahir dan tanggal saat ini dalam tahun, bulan, dan hari.
// Tampilkan umur dalam tahun, bulan, dan hari di elemen <p>.
// Cara Berpikir:
// Untuk menghitung umur, kurangi tahun saat ini dengan tahun lahir.
// Periksa bulan dan hari untuk melihat apakah sudah lewat tahun ini untuk memastikan umur yang akurat.

const ageElement = document.getElementById('age');
const birthDate = new Date('2000-01-13');
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
const dayDiff = today.getDate() - birthDate.getDate();

// Sesuaikan umur jika ulang tahun belum terjadi tahun ini
if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
	age--; // Kurangi umur 1 tahun jika belum ulang tahun
}

ageElement.textContent = `Umur: ${age} tahun`;

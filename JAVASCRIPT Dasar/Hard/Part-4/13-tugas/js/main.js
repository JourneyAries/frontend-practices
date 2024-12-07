// Judul Tugas: Menampilkan Waktu Sekarang Secara Real-Time

// Pseudocode Lengkap:
// Tangkap elemen p dengan id="currentTime".
// Buat fungsi yang:
// Mendapatkan waktu saat ini menggunakan new Date().
// Format waktu dalam format jam:menit:detik (HH:MM:SS).
// Menampilkan waktu pada elemen currentTime.
// Jalankan fungsi setiap detik menggunakan setInterval.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan objek Date untuk mendapatkan waktu sekarang.
// Gunakan metode getHours, getMinutes, dan getSeconds untuk mengambil komponen waktu.
// Gunakan setInterval agar waktu terus diperbarui setiap detik.

const currentTime = document.getElementById('currentTime');

const refreshTime = () => {
	const today = new Date();
	const jam = String(today.getHours()).padStart(2, '0');
	const menit = String(today.getMinutes()).padStart(2, '0');
	const detik = String(today.getSeconds()).padStart(2, '0');

	currentTime.textContent = `${jam}:${menit}:${detik}`;
};

setInterval(refreshTime, 1000);

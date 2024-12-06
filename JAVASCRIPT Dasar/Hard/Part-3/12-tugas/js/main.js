// Jam Digital Sederhana
// Pseudocode:
// Tangkap elemen <h1> dengan ID clock.
// Buat fungsi updateClock() untuk:
// Membaca waktu sekarang dengan new Date().
// Mengambil jam, menit, dan detik.
// Format waktu menjadi HH:MM:SS dengan padding dua digit.
// Tampilkan di elemen <h1>.
// Panggil fungsi updateClock() setiap detik dengan setInterval().
// Cara Berpikir:
// Gunakan setInterval() untuk memperbarui waktu setiap detik.
// Padding dua digit dapat dilakukan dengan metode bawaan atau cek manual (if < 10, tambahkan 0).

const clock = document.getElementById('clock');

const updateClock = () => {
	const date = new Date();

	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');

	clock.textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(updateClock, 1000);

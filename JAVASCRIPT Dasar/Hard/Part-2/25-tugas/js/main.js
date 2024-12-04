// Soal 25: Menampilkan Waktu Sekarang
// Soal: Buat tombol yang ketika diklik, akan menampilkan waktu sekarang dalam format HH:MM:SS di bawah tombol tersebut.
// Hint: Gunakan new Date() untuk mendapatkan waktu sekarang.

const showTime = document.getElementById('showTime');
const timeDisplay = document.getElementById('timeDisplay');

showTime.addEventListener('click', () => {
	const now = new Date();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	timeDisplay.textContent = `Waktu sekarang: ${hours}:${minutes}:${seconds}`;
});

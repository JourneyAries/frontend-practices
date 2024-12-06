// Menampilkan Waktu Sekarang
// Pseudocode:
// Tangkap elemen <p> dengan ID currentTime.
// Gunakan new Date() untuk mendapatkan waktu saat ini.
// Ambil jam, menit, dan detik menggunakan metode .getHours(), .getMinutes(), dan .getSeconds().
// Gabungkan nilai tersebut menjadi string seperti HH:MM:SS.
// Tampilkan string waktu di dalam elemen <p>.
// Cara Berpikir:
// .getHours(), .getMinutes(), dan .getSeconds() memberikan angka masing-masing elemen waktu.
// Gunakan padding angka untuk menit dan detik agar selalu memiliki dua digit (misalnya, 09).

const currentTime = document.getElementById('currentTime');

const displayCurrentTime = () => {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');

	const timeString = `${hours}:${minutes}:${seconds}`;

	currentTime.textContent = `Waktu sekarang adalah: ${timeString}`;
};

setInterval(displayCurrentTime, 1000);

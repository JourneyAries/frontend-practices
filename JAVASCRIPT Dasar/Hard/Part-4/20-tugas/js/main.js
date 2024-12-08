// Judul Tugas: Menampilkan Tanggal dan Waktu Sekarang

// Pseudocode Lengkap:
// Buat elemen dengan ID date-time-display untuk menampilkan tanggal dan waktu.
// Ketika halaman dimuat, tampilkan tanggal dan waktu sekarang di elemen tersebut.
// Perbarui tanggal dan waktu setiap detik.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan setInterval() untuk memperbarui waktu setiap detik.
// Gunakan Date() untuk mendapatkan tanggal dan waktu saat ini.
// Gunakan innerHTML untuk menampilkan tanggal dan waktu di halaman.

const displayDateTime = document.getElementById('date-time-display');

const updateTime = () => {
	const today = new Date();

	const hours = String(today.getHours()).padStart(2, '0');
	const minutes = String(today.getMinutes()).padStart(2, '0');
	const seconds = String(today.getSeconds()).padStart(2, '0');
	const date = today.toLocaleDateString();

	const dateTimeString = `${date} ${hours}:${minutes}:${seconds}`;

	displayDateTime.innerHTML = dateTimeString;
};

setInterval(updateTime, 1000);
updateTime();

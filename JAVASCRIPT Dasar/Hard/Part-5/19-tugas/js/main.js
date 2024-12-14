//judul project: Menampilkan Waktu Saat Ini
//list fitur utama:
// 1. Menampilkan waktu saat ini (jam, menit, detik).
// 2. Waktu diperbarui setiap detik secara otomatis.
//list main requirement:
// 1. Menampilkan waktu dengan format jam:menit:detik.
// 2. Menggunakan `setInterval` untuk memperbarui waktu setiap detik.

const timeDisplay = document.getElementById('time-display');

function updateTime() {
	//membaca ulang setiap 1 detik
	setInterval(() => {
		//declaration
		const today = new Date();
		const jam = today.getHours();
		const menit = today.getMinutes();
		const detik = today.getSeconds();

		timeDisplay.textContent = `${jam}:${menit}:${detik}`;
	}, 1000);
}

updateTime();

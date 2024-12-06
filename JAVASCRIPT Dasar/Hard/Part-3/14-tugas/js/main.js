// Hitung Mundur ke Waktu Tertentu

// Pseudocode:
// Tangkap elemen <h1> dengan ID timer.
// Buat objek Date untuk waktu target (misalnya, besok pukul 00:00:00).
// Gunakan setInterval() untuk:
// Hitung selisih waktu sekarang dan waktu target dalam milidetik.
// Konversi milidetik ke hari, jam, menit, dan detik.
// Tampilkan waktu tersisa di elemen <h1>.
// Jika waktu tersisa mencapai 0, hentikan interval.
// Cara Berpikir:
// Waktu target bisa ditentukan dengan new Date('YYYY-MM-DDTHH:mm:ss').
// Selisih waktu dalam milidetik dihitung dengan timeTarget - timeNow.
// Konversi milidetik ke detik, menit, jam, dan hari dengan pembagian.

// Tangkap elemen <h1> dengan ID timer
const timerElement = document.getElementById('timer');

// Tentukan waktu target, misalnya besok pukul 00:00:00
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 2); // Set ke hari berikutnya
targetDate.setHours(0, 0, 0, 0); // Set ke tengah malam

// Fungsi untuk menghitung waktu tersisa dan memperbarui tampilan
function updateTimer() {
	const now = new Date(); // Dapatkan waktu saat ini
	const timeLeft = targetDate - now; // Hitung selisih waktu dalam milidetik

	// Jika waktu tersisa lebih dari 0, tampilkan countdown
	if (timeLeft > 0) {
		const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // Hitung hari
		const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Hitung jam
		const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // Hitung menit
		const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); // Hitung detik

		timerElement.textContent = `Waktu tersisa: ${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
	} else {
		timerElement.textContent = 'Waktu telah habis!';
		clearInterval(interval);
	}
}

const interval = setInterval(updateTimer, 1000);

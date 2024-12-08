// Judul Tugas: Timer Mundur

// Pseudocode Lengkap:
// Buat input untuk memasukkan jumlah detik untuk timer mundur.
// Buat tombol "Mulai Timer" untuk memulai hitung mundur.
// Setelah tombol diklik, tampilkan hitungan mundur di halaman, dan berhenti ketika waktu mencapai 0.
// Tampilkan pesan "Waktu Habis!" setelah timer selesai.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan setInterval() untuk memperbarui hitungan mundur.
// Gunakan clearInterval() untuk menghentikan timer saat mencapai 0.
// Pastikan untuk menangani input yang valid (misalnya, input angka).

const inputTimer = document.getElementById('timer-input');
const btnStartTime = document.getElementById('start-timer-btn');
const displayTimer = document.getElementById('timer-display');
let interval;

btnStartTime.addEventListener('click', () => {
	let limit = parseInt(inputTimer.value);

	// Cek jika input tidak valid atau kosong
	if (isNaN(limit) || limit <= 0) {
		displayTimer.textContent = 'Harap masukkan angka yang lebih besar dari 0.';
		return;
	}

	displayTimer.textContent = `Timer dimulai... Sisa waktu: ${limit}s`;

	// Jika interval sudah ada, hentikan timer sebelumnya
	if (interval) {
		clearInterval(interval);
	}

	interval = setInterval(() => {
		limit--;
		displayTimer.textContent = `Sisa waktu: ${limit}s`;

		if (limit <= 0) {
			clearInterval(interval);
			displayTimer.textContent = 'Timer selesai! Waktu Habis!';
		}
	}, 1000);
});

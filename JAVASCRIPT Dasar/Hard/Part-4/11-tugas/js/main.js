// Judul Tugas: Membuat Stopwatch

// Pseudocode Lengkap:
// Tangkap elemen tombol dengan id="start", id="stop", dan id="reset".
// Tangkap elemen p dengan id="timer" untuk menampilkan waktu.
// Buat variabel count untuk menyimpan waktu dan interval untuk menyimpan ID interval.
// Tambahkan event listener pada tombol:
// "Start": Mulai interval untuk meningkatkan count setiap detik dan perbarui elemen timer.
// "Stop": Hentikan interval menggunakan clearInterval.
// "Reset": Set count kembali ke 0, perbarui elemen timer, dan hentikan interval jika berjalan.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan setInterval untuk menjalankan fungsi secara berulang.
// Gunakan clearInterval untuk menghentikan interval yang berjalan.
// Pastikan variabel count di-reset saat tombol "Reset" ditekan.

const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let count = 0;
let interval;

//null = tidak ada interval yang aktif
//false = interval tidak aktif, tapi statusnya false atau boolean
//perbedaanya cuma di semantik dan makna aja.

start.addEventListener('click', () => {
	if (!interval) {
		interval = setInterval(() => {
			count++;
			timer.textContent = count;
		}, 1000);
	}
});

stop.addEventListener('click', () => {
	clearInterval(interval);
  interval = false;
});

reset.addEventListener('click', () => {
	clearInterval(interval);
	interval = null;
	count = 0;
	timer.textContent = count;
});

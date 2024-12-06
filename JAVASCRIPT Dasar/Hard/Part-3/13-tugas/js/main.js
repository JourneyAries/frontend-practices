// Hitung Mundur Sederhana
// Pseudocode:
// Tangkap elemen <h1> dengan ID countdown.
// Buat variabel count dengan nilai awal, misalnya 10.
// Gunakan setInterval() untuk mengurangi nilai count setiap detik.
// Periksa apakah count sudah mencapai 0:
// Jika iya, berhentikan interval menggunakan clearInterval().
// Tampilkan pesan "Selesai!" di elemen <h1>.
// Cara Berpikir:
// Hitungan mundur menggunakan interval.
// Gunakan kondisional (if) untuk menghentikan interval ketika mencapai 0.

const countdown = document.getElementById('countdown');
let count = 10;

const interval = setInterval(() => {
	countdown.textContent = count;
	count--;

	if (count < 0) {
		clearInterval(interval);
		countdown.textContent = 'Selesai!';
	}
}, 1000);

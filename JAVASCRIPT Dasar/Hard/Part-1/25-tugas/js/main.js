// Tugas 25: Animasi Sederhana
// Soal: Buat elemen < div > bergerak dari kiri ke kanan secara bertahap saat tombol Start Animation diklik.
// Hint: Gunakan setInterval() untuk memperbarui posisi elemen.

const box = document.getElementById('box');
const startButton = document.getElementById('startAnimation');

startButton.addEventListener('click', () => {
	let position = 0;

	const interval = setInterval(() => {
		position += 5;

		box.style.left = position + 'px';

		if (position >= 500) {
			clearInterval(interval);
		}
	}, 10);
});

// Tugas 18: Tampilkan Waktu Saat Ini
// Soal: Tampilkan waktu saat ini dalam format HH: MM:SS di elemen < p > dengan id timeDisplay saat tombol Show Time diklik.
// Hint: Gunakan objek Date untuk mendapatkan waktu sekarang.

const timeBtn = document.getElementById('timeBtn');
const timeDisplay = document.getElementById('timeDisplay');

timeBtn.addEventListener('click', () => {
	// Dapatkan waktu saat ini
	const now = new Date();

	let hours = now.getHours().toString().padStart(2, '0');
	let minutes = now.getMinutes().toString().padStart(2, '0');
	let seconds = now.getSeconds().toString().padStart(2, '0');

	const timeString = `${hours}:${minutes}:${seconds}`;

	// Tampilkan waktu dalam elemen <p>
	timeDisplay.textContent = timeString;
});

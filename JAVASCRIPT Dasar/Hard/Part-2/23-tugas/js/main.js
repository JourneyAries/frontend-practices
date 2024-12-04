// Soal 23: Menghitung Klik
// Soal: Buat tombol yang menghitung berapa kali telah diklik, dan tampilkan jumlah klik di bawah tombol.
// Hint: Gunakan variabel counter untuk melacak jumlah klik.

const clickCounter = document.getElementById('clickCounter');
const counterDisplay = document.getElementById('counterDisplay');

let count = 0;

clickCounter.addEventListener('click', () => {
	count++;
	counterDisplay.textContent = `Jumlah klik: ${count}`;
});

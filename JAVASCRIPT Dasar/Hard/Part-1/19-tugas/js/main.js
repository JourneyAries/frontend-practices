// Tugas 19: Hitung Jumlah Klik
// Soal: Tampilkan jumlah klik pada tombol di dalam elemen < span >.
// Hint: Gunakan variabel untuk menyimpan jumlah klik, dan perbarui teks elemen <span>.

const clickCounter = document.getElementById('clickCounter');
const clickCount = document.getElementById('clickCount');
let counter = 0;

clickCounter.addEventListener('click', () => {
	counter++;
	clickCount.textContent = counter;
});

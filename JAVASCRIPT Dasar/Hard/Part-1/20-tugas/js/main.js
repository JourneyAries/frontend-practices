// Tugas 20: Ubah Teks Secara Bergantian
// Soal: Ganti teks yang ditampilkan di dalam elemen < p > setiap kali tombol diklik, secara bergantian antara dua teks yang berbeda.

const textDisplay = document.getElementById('textDisplay');
const changeTextBtn = document.getElementById('changeTextBtn');

const texts = ['This is the first text.', 'This is the second text.'];
let currentIndex = 0;

changeTextBtn.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % texts.length;
	textDisplay.textContent = texts[currentIndex];
});

//Jadi, 1 % 2 = 1 adalah hasil yang benar karena 2 tidak bisa membagi 1 dengan hasil lebih dari 0, dan sisanya adalah 1.
//Oleh karena itu, hasilnya adalah 1, karena 1 adalah sisa yang tidak bisa dibagi habis oleh 2.

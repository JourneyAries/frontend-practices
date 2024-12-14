//judul project: Tombol Terakhir Ditekan
//list fitur utama:
// 1. Menampilkan dua tombol untuk diklik.
// 2. Menampilkan informasi tombol terakhir yang diklik.
//list main requirement:
// 1. Dua tombol yang bisa diklik.
// 2. Menampilkan teks "Tombol pertama" atau "Tombol kedua" berdasarkan tombol yang terakhir diklik.

const container = document.querySelector('.container');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const lastClicked = document.getElementById('last-clicked');

container.addEventListener('click', (e) => {
	if (e.target.id === 'btn1') {
		e.stopPropagation();
		const result = document.createElement('li');
		result.classList.add('result');
		result.textContent = 'btn1 clicked';
		lastClicked.appendChild(result);
	}
	if (e.target.id === 'btn2') {
		e.stopPropagation();
		const result = document.createElement('li');
		result.classList.add('result');
		result.textContent = 'btn2 clicked';
		lastClicked.appendChild(result);
	}
});

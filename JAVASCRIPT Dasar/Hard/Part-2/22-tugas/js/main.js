// Soal 22: Menambahkan dan Menghapus Elemen
// Soal: Tambahkan dua tombol, satu untuk menambahkan elemen <p> baru dengan teks "Paragraf Baru", dan satu lagi untuk menghapus paragraf terakhir dari container.
// Hint: Gunakan appendChild() dan removeChild().

const container = document.getElementById('container');
const addParagraph = document.getElementById('addParagraph');
const removeParagraph = document.getElementById('removeParagraph');

addParagraph.addEventListener('click', function (e) {
	const newParagraph = document.createElement('p');
	newParagraph.textContent = 'Paragraph Baru';
	container.appendChild(newParagraph);
});

removeParagraph.addEventListener('click', function () {
	if (container.lastElementChild) {
		container.removeChild(container.lastElementChild);
	}
});

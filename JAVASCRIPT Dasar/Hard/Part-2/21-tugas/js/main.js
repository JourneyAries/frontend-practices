// Soal 21: Toggle Class
// Soal: Tambahkan tombol yang ketika diklik, akan menambah/menghapus kelas highlight pada paragraf.
// Hint: Gunakan classList.toggle().

const myParagraph = document.getElementById('myParagraph');
const toggleClassBtn = document.getElementById('toggleClassBtn');

toggleClassBtn.addEventListener('click', function () {
	myParagraph.classList.toggle('highlight');
});

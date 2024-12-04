// Soal 12: Mengubah Sibling Sebelumnya
// Soal: Pilih elemen dengan kelas current dan ubah teks dari elemen sibling sebelumnya menjadi "Sibling Updated".
// Hint: Gunakan previousElementSibling.

const current = document.querySelector('.current');
const previousElementSibling = current.previousElementSibling;

if (previousElementSibling) {
	previousElementSibling.textContent = 'Sibling Updated';
}

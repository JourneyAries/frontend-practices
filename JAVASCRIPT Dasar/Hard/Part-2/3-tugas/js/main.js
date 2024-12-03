// Soal 3: Pilih Elemen Berdasarkan Tag
// Soal: Pilih semua elemen <p> dan ubah teksnya menjadi "Paragraph updated".
// Hint: Gunakan document.getElementsByTagName().

const paragraphs = document.getElementsByTagName('p');
for (let paragraph of paragraphs) {
	paragraph.textContent = 'Paragraph Updated';
}

// Array.from(paragraphs).forEach((p) => {
// 	p.textContent = 'Paragraph updated';
// });

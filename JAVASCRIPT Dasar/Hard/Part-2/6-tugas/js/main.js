// Soal 6: Menambahkan Event Listener
// Soal: Tambahkan event listener pada tombol yang mengubah teks paragraf menjadi "Teks telah diubah" ketika tombol diklik.
// Hint: Gunakan addEventListener().

const text = document.getElementById('text');
const button = document.getElementById('changeTextBtn');

button.addEventListener('click', () => {
	text.textContent = 'Teks telah diubah';
});

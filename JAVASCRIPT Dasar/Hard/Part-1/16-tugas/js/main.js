// Tugas 16: Event Delegation
// Soal: Tampilkan alert dengan teks elemen yang diklik dalam sebuah daftar < ul >.
// Hint: Tangani event pada <ul> menggunakan target.

const list = document.getElementById('clickableList');

list.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		//Properti tagName Selalu Menghasilkan Uppercase
		alert(`Clicked: ${e.target.textContent}`);
	}
});

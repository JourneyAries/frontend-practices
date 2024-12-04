// Soal 19: Delegasi Event pada Banyak Tombol
// Soal: Tambahkan event listener ke container yang berisi tombol-tombol, sehingga ketika tombol mana pun diklik, teks tombol itu ditampilkan dalam alert.
// Hint: Gunakan event delegation dengan event.target.

const buttonContainer = document.getElementById('buttonContainer');

buttonContainer.addEventListener('click', function (e) {
	if (e.target.tagName === 'BUTTON') {
		alert(`you clicked: ${e.target.textContent}`);
	}
});

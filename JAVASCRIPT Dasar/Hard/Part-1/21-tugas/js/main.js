// Tugas 21: Highlight Elemen saat Diklik
// Soal: Tambahkan kelas highlight ke elemen < li > yang diklik.
// Hint: Gunakan classList.add() untuk menambahkan kelas.

const highlightList = document.getElementById('highlightList');

highlightList.addEventListener('click', (e) => {
	if ((e.target.tagName = 'LI')) {
		e.target.classList.add('highlight');
	}
});

// Tugas 23: Iterasi Elemen dan Tampilkan Alert
// Soal: Tampilkan alert dengan teks setiap elemen < li > dalam daftar ketika tombol diklik.
// Hint: Gunakan forEach untuk iterasi elemen <li>.

const list = document.querySelectorAll('#alertList li');
const alertBtn = document.getElementById('alertBtn');

alertBtn.addEventListener('click', () => {
	list.forEach((item) => {
		alert(item.textContent);
	});
});

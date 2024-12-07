// Membuat Daftar yang Dapat Dihapus
// Pseudocode lengkap:
// Tangkap elemen ul dengan id="daftar".
// Tambahkan event listener ke elemen ul menggunakan addEventListener.
// Dalam event listener:
// Pastikan klik hanya pada elemen li (cek event.target).
// Gunakan metode removeChild untuk menghapus elemen li yang diklik.
// Cara berpikir / hack atau tips lengkap:
// Gunakan event delegation: tambahkan listener ke elemen ul, bukan setiap li.
// Gunakan event.target untuk mengetahui elemen mana yang diklik.

const daftar = document.getElementById('daftar');

daftar.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		daftar.removeChild(e.target);
	}
});

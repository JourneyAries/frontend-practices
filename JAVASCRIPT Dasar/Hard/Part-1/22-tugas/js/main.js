// Tugas 22: Tambahkan Kelas Aktif
// Soal: Tambahkan kelas active pada tombol yang diklik dan hapus kelas tersebut dari tombol lain.
// Hint: Gunakan querySelectorAll untuk iterasi tombol.

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		// Hapus kelas 'active' dari semua tombol
		buttons.forEach((btn) => btn.classList.remove('active'));
		button.classList.add('active');
	});
});

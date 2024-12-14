//judul project: Tampilkan Pesan Setelah Tombol Ditekan
//list fitur utama:
// 1. Menampilkan tombol untuk menampilkan pesan.
// 2. Ketika tombol ditekan, pesan muncul di bawah tombol.
//list main requirement:
// 1. Tombol yang saat diklik menampilkan pesan di bawahnya.

//declaration
const btnShowMessage = document.getElementById('show-message-btn');

btnShowMessage.addEventListener('click', () => {
	const nextElement = btnShowMessage.nextElementSibling;
	nextElement.style.display = 'block';
});

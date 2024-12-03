// Soal 7: Event Listener dengan Argumen
// Soal: Tambahkan event listener pada tombol yang akan menampilkan alert dengan pesan "Tombol diklik!" saat tombol diklik.
// Hint: Gunakan alert() dalam callback fungsi.

const alertBtn = document.getElementById('alertBtn');
alertBtn.addEventListener('click', function () {
	alert('Clicked');
});

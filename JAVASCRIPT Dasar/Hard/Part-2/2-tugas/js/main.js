// Soal 2: Pilih Semua Elemen dengan Kelas Tertentu
// Soal: Pilih semua elemen dengan kelas item dan ubah latar belakangnya menjadi warna merah.
// Hint: Gunakan document.getElementsByClassName() atau document.querySelectorAll().

const items = document.querySelectorAll('.item');
items.forEach((item) => {
	item.style.backgroundColor = 'red';
});

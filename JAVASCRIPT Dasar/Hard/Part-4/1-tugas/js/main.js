// Ubah Warna Teks
// Pseudocode lengkap:
// Tangkap elemen paragraf dengan id="teks".
// Tangkap elemen tombol dengan id="ubahWarna".
// Tambahkan event listener pada tombol agar memicu fungsi saat diklik.
// Dalam fungsi, ubah properti color pada paragraf menjadi warna yang berbeda (misalnya, "red").
// Cara berpikir / hack atau tips lengkap:
// Gunakan document.getElementById untuk menangkap elemen dengan ID tertentu.
// Gunakan event listener seperti addEventListener('click', ...).
// Properti CSS dapat diubah dengan element.style.property.

const teks = document.getElementById('teks');
const ubahWarna = document.getElementById('ubahWarna');

ubahWarna.addEventListener('click', () => {
	teks.style.color = 'red';
});

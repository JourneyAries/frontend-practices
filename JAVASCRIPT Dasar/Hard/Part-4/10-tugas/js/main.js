// Judul Tugas: Mengubah Background Warna Secara Dinamis

// Pseudocode Lengkap:
// Tangkap elemen input dengan id="colorInput" dan elemen tombol dengan id="applyColor".
// Tambahkan event listener pada tombol untuk mendeteksi klik.
// Dalam event listener:
// Ambil nilai dari input (kode warna, misalnya #ff0000 atau blue).
// Ubah properti backgroundColor pada elemen body sesuai nilai input.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan input dengan tipe color agar pengguna dapat memilih warna lebih mudah, atau tipe text untuk mengetikkan kode warna.
// Gunakan document.body.style.backgroundColor untuk mengubah warna latar belakang halaman.

const colorInput = document.getElementById('colorInput');
const btnApplyColor = document.getElementById('applyColor');

btnApplyColor.addEventListener('click', () => {
	document.body.style.backgroundColor = colorInput.value;
});

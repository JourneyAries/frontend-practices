// Judul Tugas: Validasi Input Text
// Pseudocode Lengkap:
// Tangkap elemen input dengan id="inputText" dan tombol dengan id="submitBtn".
// Tangkap elemen paragraf dengan id="errorMessage".
// Tambahkan event listener pada tombol.
// Dalam event listener:
// Periksa apakah input kosong dengan memeriksa value dari elemen input.
// Jika kosong, tampilkan pesan kesalahan di paragraf dan tambahkan warna merah pada input.
// Jika tidak kosong, tampilkan pesan "Input valid!" di paragraf dan tambahkan warna hijau pada input.
// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan properti value untuk membaca teks dari input.
// Gunakan properti CSS seperti style.color untuk mengubah warna teks dan style.borderColor untuk mengubah warna border input.
// Pastikan pesan kesalahan dihapus jika input valid.

const inputText = document.getElementById('inputText');
const btnSubmit = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');

btnSubmit.addEventListener('click', () => {
	if (inputText.value.trim() === '') {
		errorMessage.textContent = 'Invalid';
		errorMessage.style.color = 'red';
		return;
	} else {
		errorMessage.textContent = 'Input Valid!';
		errorMessage.style.color = 'green';
		return;
	}
});

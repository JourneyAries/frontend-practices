// Judul Tugas: Penghitung Karakter dalam Input

// Pseudocode Lengkap:
// Buat input teks dengan ID text-input yang memungkinkan pengguna mengetik.
// Tampilkan jumlah karakter yang dimasukkan dalam input di elemen lain (misalnya, ID char-count).
// Setiap kali pengguna mengetik, jumlah karakter yang dimasukkan harus diperbarui secara otomatis.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan input event listener untuk memantau setiap perubahan pada input teks.
// Gunakan textContent untuk menampilkan jumlah karakter yang dimasukkan.
// Pastikan pembaruan jumlah karakter terjadi setiap kali pengguna mengetik.

const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

textInput.addEventListener('input', () => {
	charCount.textContent = `Jumlah Karakter: ${textInput.value.length}`;
});

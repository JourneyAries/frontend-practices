// Judul Tugas: Menghitung Panjang Karakter

// Pseudocode Lengkap:
// Tangkap elemen input dengan id="inputText" dan elemen span dengan id="charCount".
// Tambahkan event listener pada elemen input yang memantau event input.
// Dalam event listener:
// Ambil nilai dari elemen input menggunakan value.
// Hitung panjang teks dengan value.length.
// Tampilkan panjang teks pada elemen span.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan event input untuk memantau perubahan langsung pada elemen input.
// Pastikan nilai yang diambil selalu diperbarui setiap kali pengguna mengetik.

const inputText = document.getElementById('inputText');
const charCount = document.getElementById('charCount');

inputText.addEventListener('input', () => {
  charCount.textContent = inputText.value.length;
})
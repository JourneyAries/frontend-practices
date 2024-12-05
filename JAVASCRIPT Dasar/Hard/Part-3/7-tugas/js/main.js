// Membalik Teks
// Pseudocode:
// Tangkap input field dan tombol.
// Set event listener pada tombol untuk membaca teks dari input.
// Balikkan teks menggunakan metode JavaScript seperti .split(''), .reverse(), dan .join('').
// Tampilkan teks yang dibalik di elemen result.
// Cara Berpikir:
// Metode .split('') memisahkan string menjadi array karakter, .reverse() membalikkan array, dan .join('') menggabungkan array kembali menjadi string.
// Upgrade Fitur Versi 2:
// Tambahkan pemeriksaan untuk input kosong dan beri peringatan kepada pengguna.
// Upgrade Fitur Versi 3:
// Biarkan pengguna membalikkan teks secara otomatis setiap kali mereka mengetik di input (gunakan event input).

const textInput = document.getElementById('textInput');
const reverseButton = document.getElementById('reverseButton');
const result = document.getElementById('result');

reverseButton.addEventListener('click', () => {
	const reverseText = textInput.value.split('').reverse().join('');
  result.textContent = reverseText;
});

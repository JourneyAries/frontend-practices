//judul project: Pengubah Teks Menjadi Huruf Kapital
//list fitur utama:
// 1. Menampilkan input teks.
// 2. Mengubah teks menjadi huruf kapital setelah tombol ditekan.
//list main requirement:
// 1. Form input untuk memasukkan teks.
// 2. Tombol untuk mengubah teks menjadi kapital.
// 3. Menampilkan teks hasil perubahan.

const inputText = document.getElementById('input-text');
const btnConvert = document.getElementById('convert-btn');
const outputText = document.getElementById('output-text');

btnConvert.addEventListener('click', () => {
  outputText.textContent = inputText.value.trim().toUpperCase();
})
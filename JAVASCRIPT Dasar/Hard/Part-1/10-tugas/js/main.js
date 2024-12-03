// Tugas 10: Ubah Teks Menggunakan Value Input
// Soal: Tampilkan teks yang diinputkan pengguna pada elemen < h3 > saat tombol Submit diklik.
// Hint: Gunakan .value untuk mengambil teks dari input.

const h3 = document.getElementById('outputText');
const textInput = document.getElementById('textInput');
const showTextBtn = document.getElementById('showTextBtn');

showTextBtn.addEventListener('click', function () {
  h3.textContent = textInput.value;
});
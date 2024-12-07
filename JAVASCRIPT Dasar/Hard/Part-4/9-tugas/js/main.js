// Judul Tugas: Tombol Like dengan Counter
// Pseudocode Lengkap:
// Tangkap elemen tombol dengan id="likeBtn" dan elemen span dengan id="likeCount".
// Buat variabel untuk menyimpan jumlah likes, misalnya let count = 0.
// Tambahkan event listener pada tombol.
// Dalam event listener:
// Tingkatkan nilai variabel likes dengan count++.
// Tampilkan nilai baru pada elemen span.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan variabel JavaScript untuk menyimpan data yang terus diperbarui.
// Gunakan textContent untuk memperbarui nilai di elemen span.

const btnLike = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
let count = 0;

btnLike.addEventListener('click', () => {
  count++;
  likeCount.textContent = count;
})

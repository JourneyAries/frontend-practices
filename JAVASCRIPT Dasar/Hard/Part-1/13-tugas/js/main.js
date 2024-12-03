// Tugas 13: Hapus Elemen
// Soal: Hapus elemen < p > dengan kelas removable ketika tombol Remove diklik.
// Hint: Gunakan .remove() untuk menghapus elemen.

const removable = document.querySelector('.removable');
const removeBtn = document.getElementById('removeBtn');

removeBtn.addEventListener('click', function () {
	removable.remove();
});

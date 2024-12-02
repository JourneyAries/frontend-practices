// Tugas 9: Ubah Gaya Elemen dengan Event
// Soal: Ubah warna background elemen < div > dengan id box menjadi hijau saat tombol Change Color diklik.
// Hint: Gunakan .style.backgroundColor pada elemen <div>.

const colorBtn = document.getElementById('colorBtn');
const box = document.getElementById('box');

colorBtn.addEventListener('click', () => {
  box.style.backgroundColor = 'green';
});
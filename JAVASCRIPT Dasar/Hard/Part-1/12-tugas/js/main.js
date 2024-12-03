// Tugas 12: Toggle Visibility
// Soal: Toggle(sembunyikan / tampilkan) elemen dengan id infoBox saat tombol diklik.
// Hint: Gunakan .style.display untuk mengatur tampilan elemen.

const toggleBtn = document.getElementById('toggleBtn');
const infoBox = document.getElementById('infoBox');

toggleBtn.addEventListener('click', () => {
  if (infoBox.style.display === 'none') {
    infoBox.style.display = 'block';
  } else {
    infoBox.style.display = 'none';
  }
})
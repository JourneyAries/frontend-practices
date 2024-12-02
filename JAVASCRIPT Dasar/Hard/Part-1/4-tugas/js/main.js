// Tugas 4: DOM Events - Klik Tombol
// Soal: Tampilkan alert "Button Clicked!" saat tombol diklik.
// Hint: Gunakan addEventListener('click', callbackFunction) untuk mendeteksi klik.

const btnClick = document.getElementById('btnClick');
btnClick.addEventListener('click', function() {
  alert('Button Clicked');
});
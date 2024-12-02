// Tugas 5: DOM Events - Hover pada Tombol
// Soal: Ubah teks tombol menjadi "Hovered!" saat kursor berada di atas tombol.
// Hint: Gunakan event "mouseover" untuk mendeteksi hover.

const hoverBtn = document.getElementById('hoverBtn');
hoverBtn.addEventListener('mouseover', () => {
  hoverBtn.innerHTML = ('Hovered!');
})

hoverBtn.addEventListener('mouseout', () => {
  hoverBtn.innerHTML = ('Hover over me');
})
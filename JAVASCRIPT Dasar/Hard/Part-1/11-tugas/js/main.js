// Tugas 11: Iterasi List Items
// Soal: Tambahkan angka urut di depan setiap elemen < li > dalam daftar dengan id myList.
// Hint: Gunakan querySelectorAll untuk memilih semua <li> dan iterasi menggunakan .forEach().

const list = document.querySelectorAll('#myList li');

list.forEach((item, index) => {
  item.textContent = `${index+1}. ${item.textContent}`
});
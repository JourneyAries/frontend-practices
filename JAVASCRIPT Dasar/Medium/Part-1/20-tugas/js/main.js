//20. Memfilter Karakter Khusus
//Buat fungsi filterSpecialChars(str) yang menghapus semua karakter selain huruf dan angka dari string str.

function filterSpecialChars(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}

console.log(filterSpecialChars("hello@123!"));
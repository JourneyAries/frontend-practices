//23. Menggunakan String.prototype.split() dan Array.prototype.length
//Buat fungsi wordCount(str) yang menghitung jumlah kata dalam str berdasarkan spasi.
//Contoh: wordCount("I love coding") mengembalikan 3.

function wordCount(str) {
  return str.split(' ').length;
}

console.log(wordCount("I love coding"));
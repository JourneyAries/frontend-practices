//22. Menggunakan String.prototype.trim()
//Buat fungsi trimSpaces(str) yang menghapus spasi di awal dan akhir str.
//Contoh: trimSpaces(" hello world ") mengembalikan "hello world".

function trimSpaces(str) {
  return str.trim(' ');
}

console.log(trimSpaces(" hello world "));
//9. Menggunakan String.prototype.padEnd()
//Buat fungsi padStringRight(str, length, char) yang menambahkan char di akhir str hingga mencapai panjang length
//Contoh: padStringRight("abc", 5, "-") mengembalikan "abc--".

function padStringRight(str, length, char) {
  return str.padEnd(length, char)
}

console.log(padStringRight("abc", 5, "-"));
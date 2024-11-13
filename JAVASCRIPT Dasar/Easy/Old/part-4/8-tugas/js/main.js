//8. Menggunakan String.prototype.padStart()
//Buat fungsi padStringLeft(str, length, char) yang menambahkan char di awal str hingga mencapai panjang length.
//Contoh: padStringLeft("123", 5, "0") mengembalikan "00123".

function padStringLeft(str, length, char) {
  return str.padStart(length, char);
}

console.log(padStringLeft("123", 5, "0"));
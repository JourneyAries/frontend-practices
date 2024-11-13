//7. Menggunakan String.prototype.replace()
//Buat fungsi replaceSpaces(str) yang mengubah semua spasi dalam str menjadi karakter "-".
//Contoh: replaceSpaces("hello world") mengembalikan "hello-world".


function replaceSpaces(str) {
  return str.replace(' ', '-');
}

console.log(replaceSpaces("hello world"));
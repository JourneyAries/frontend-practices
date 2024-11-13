//1. Menggunakan String.prototype.endsWith()
//Buat fungsi endsWithSubstring(str, substring) yang mengembalikan true jika str diakhiri dengan substring, dan false jika tidak.
//Contoh: endsWithSubstring("javascript", "script") mengembalikan true.

function endsWithSubstring(str, substring) {
  return str.endsWith(substring);
}

console.log(endsWithSubstring("javascript", "script"));
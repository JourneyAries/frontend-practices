//3. Menggunakan String.prototype.substring()
//Buat fungsi getSubstring(str, start, end) yang mengembalikan bagian dari str mulai dari indeks start hingga end (tidak termasuk end).
//Contoh: getSubstring("javascript", 0, 4) mengembalikan "java".

function getSubstring(str, start, end) {
  return str.substring(start, end)
}

console.log(getSubstring("javascript", 0, 4));
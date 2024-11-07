//17. Menggunakan String.prototype.lastIndexOf()
//Buat fungsi lastOccurrence(str, char) yang mengembalikan indeks terakhir dari char dalam str, atau -1 jika tidak ditemukan.
//Contoh: lastOccurrence("hello world", "o") mengembalikan 7.

function lastOccurrence(str, char) {
  return str.lastIndexOf(char)
}

console.log(lastOccurrence("hello world", "o"));
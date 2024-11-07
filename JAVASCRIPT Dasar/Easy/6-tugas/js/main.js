//6. Menggunakan String.prototype.indexOf()
//Buat fungsi firstOccurrence(str, char) yang mengembalikan indeks pertama dari char dalam str, atau -1 jika karakter tidak ditemukan.
//Contoh: firstOccurrence("hello", "e") mengembalikan 1.

function firstOccurrence(str, char) {
  return str.indexOf(char);
}

console.log(firstOccurrence("hello", "e"));
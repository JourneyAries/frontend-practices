//1. Menggunakan String.prototype.includes()
//Buat fungsi containsSubstring(str, substring) yang mengembalikan true jika substring terdapat dalam str, dan false jika tidak.
//Contoh: containsSubstring("hello world", "world") mengembalikan true.


function containsSubstring(str, substring) {
  if (str.includes(substring)) {
    return `"${substring}" ada di dalam string`;
  } else {
    return `tidak ada kata tersebut!`;
  }
}

console.log(containsSubstring('hello world', 'world'));
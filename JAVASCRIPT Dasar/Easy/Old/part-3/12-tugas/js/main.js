//12. Menggunakan String.prototype.startsWith()
//Buat fungsi startsWithVowel(word) yang mengembalikan true jika kata word dimulai dengan huruf vokal (a, e, i, o, u), dan false jika tidak.
//Contoh: startsWithVowel("apple") mengembalikan true.

function startsWithVowel(word) {
  return word.startsWith('a', 'i', 'u', 'e', 'o') ? true : false;  
}

console.log(startsWithVowel("apple"));
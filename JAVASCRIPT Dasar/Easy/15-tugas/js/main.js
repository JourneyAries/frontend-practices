//15. Menggunakan String.prototype.match()
//Buat fungsi findAllVowels(str) yang mengembalikan array semua huruf vokal dalam string str.
//Contoh: findAllVowels("hello world") mengembalikan ["e", "o", "o"].

function findAllVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels || [];
}

console.log(findAllVowels("hello world"));
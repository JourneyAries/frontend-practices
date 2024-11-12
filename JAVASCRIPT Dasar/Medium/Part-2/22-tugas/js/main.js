//22. Menghapus Karakter Vokal dari String
//Buat fungsi removeVowels(str) yang menghilangkan semua huruf vokal dari string.

function removeVowels(str) {
  return str.replace(/[aiueoAIUEO]/g, '');
}

console.log(removeVowels("Hello World"));
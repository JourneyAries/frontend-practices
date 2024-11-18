//9. Mengecek Anagram
//Buat fungsi isAnagram(str1, str2) yang menerima dua string dan mengembalikan true jika keduanya adalah anagram, dan false jika tidak.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str1.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent"));
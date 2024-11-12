//16. Mengecek String yang Terbalik
//Buat fungsi isReversedEqual(str1, str2) yang memeriksa apakah str2 adalah string terbalik dari str1.

function isReversedEqual(str1, str2) {
  return str1 === str2.split('').reverse().join('');
}

console.log(isReversedEqual("abcd", "dcba"));
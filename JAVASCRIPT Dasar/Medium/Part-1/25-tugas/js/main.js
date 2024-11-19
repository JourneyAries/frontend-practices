// 25. Hitung Kata Terpanjang
// Buat fungsi findLongestWord(sentence) untuk menemukan kata terpanjang dalam kalimat.

// Hint:
// Pisahkan string menjadi array kata.
// Cari kata dengan panjang maksimum menggunakan perulangan.

// console.log(findLongestWord("I love JavaScript programming"));
// Output: "programming"

//cara pertama
function findLongestWord1(sentence) {
  const words = sentence.split(' ');

  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord1("I love JavaScript programming"));

function findLongestWord2(sentence) {
  const words = sentence.split(' ');
  return words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

console.log(findLongestWord2("I love JavaScript programming"));


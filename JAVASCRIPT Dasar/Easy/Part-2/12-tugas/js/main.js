//12. Mencari Kata Terpanjang dalam Kalimat
//Fungsi: findLongestWord(sentence)
//Parameter: sentence (string)
//Hint: Pisahkan string menjadi array kata, lalu bandingkan panjangnya.
//Contoh Pemanggilan: findLongestWord("I love programming") // "programming"

//for loop
function findLongestWord1(sentence) {
  let words = sentence.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  
  return longestWord;
}

//reduce
function findLongestWord2(sentence) {
  return sentence.split(' ').reduce((longestWord, item) =>
    item.length > longestWord.length ? item : longestWord, '');
}

//sort
function findLongestWord3(sentence) {
  const words = sentence.split(' ');
  words.sort((a, b) => b.length - a.length);
  return words[0];
}

//for of
function findLongestWord4(sentence) {
  const words = sentence.split(' ');
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// map and Math.max
function findLongestWord5(sentence) {
  const words = sentence.split(' ');
  const lengths = words.map(word => word.length);
  const maxLength = Math.max(...lengths);
  return words.find(word => word.length === maxLength);
}

console.log(findLongestWord1("I love programming"));
console.log(findLongestWord2("I love programming"));
console.log(findLongestWord3("I love programming"));
console.log(findLongestWord4("I love programming"));
console.log(findLongestWord5("I love programming"));
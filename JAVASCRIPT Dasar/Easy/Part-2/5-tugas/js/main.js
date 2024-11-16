//5. Cek String Mengandung Kata
//Fungsi: containsWord(str, word)
//Parameter: str (string), word (string)
//Hint: Gunakan metode .includes.
//Contoh Pemanggilan: containsWord("hello world", "world") // true

//includes
const containsWord1 = (str, word) => {
  return str.includes(word);
}

// regex 
const containsWord2 = (str, word) => {
  const regex = new RegExp(`\\b${word}\\b`, 'i');
  return regex.test(str);
}

//indexOf
const containsWord3 = (str, word) => {
  return str.indexOf(word) !== -1;
}


//match
const containsWord4 = (str, word) => {
  return str.match(new RegExp(`\\b${word}\\b`, 'i')) !== null;
}

//some
const containsWord5 = (str, word) => {
  return str.split(' ').some(item => item === word);
}

//for of
const containsWord6 = (str, word) => {
  const words = str.split(' ');
  for (let item of words) {
    if (item === word) {
      return true;
    }
  }
  return false;
}

console.log(containsWord1("hello world", "world"));
console.log(containsWord2("hello world", "world"));
console.log(containsWord3("hello world", "world"));
console.log(containsWord4("hello world", "world"));
console.log(containsWord5("hello world", "world"));
console.log(containsWord6("hello world", "world"));
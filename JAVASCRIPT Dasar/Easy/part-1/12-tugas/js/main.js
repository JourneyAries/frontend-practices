//12. Menghitung Jumlah Kata dalam Kalimat
//Fungsi: countWords(sentence)
//Parameter: sentence (string)
//Hint: split string berdasarkan spasi.
//Contoh Pemanggilan: countWords("Hello world") // 2

//for loop 
function countWords1(sentence) {
  let counter = 0;
  let inWord = false;

  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] !== ' ' && !inWord) {
      counter++;
      inWord = true;
    } else if (sentence[i] === ' ') {
      inWord = false;
    }
  }
  return counter;
}

//forEach
function countWords2(sentence) {
  let counter = 0;
  let newSentence = sentence.split(' ');
  newSentence.forEach(() =>{
    counter++;
  });

  return counter;
}

//for of
function countWords3(sentence) {
  let counter = 0;
  let inWord = false;

  for (let index of sentence) {
    if (index !== ' ' && !inWord) {
      counter++;
      inWord = true;
    } else if (index === ' ') {
      inWord = false;
    }
  }
  return counter;
}

//split & filter
function countWords4(sentence) {
  return sentence.split(' ').filter(word => word.length > 0).length;
}

//reduce
function countWords5(sentence) {
  return sentence.split(' ').reduce((count, word) => word.length > 0 ? count + 1 : count, 0)
}

console.log(countWords1("Hello world"));
console.log(countWords2("Hello world"));
console.log(countWords3("Hello world"));
console.log(countWords4("Hello world"));
console.log(countWords5("Hello world"));
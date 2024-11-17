//14. Menghitung Huruf dalam String
//Fungsi: countLetters(str)
//Parameter: str (string)
//Hint: Loop tiap karakter, abaikan spasi.
//Contoh Pemanggilan: countLetters("hello world") // 10

//for loop
function countLetters1(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] !== ' ') {
      counter++;
    }
  }
  return counter;
}

//for of
function countLetters2(str) {
  let counter = 0;
  for (let item of str) {
    if (item !== ' ') {
      counter++;
    }
  }
  return counter;
}

//split & join
function countLetters3(str) {
  return str.split(' ').join('').length;
}

//replace, regex
function countLetters4(str) {
  return str.replace(/\s/g, '').length;
}

//reduce
function countLetters5(str) {
  return str.split('').reduce((counter, item) => {
    return item !== ' ' ? counter + 1 : counter;
  }, 0);
}

//rekursi
function countLetters6(str) {
  if (str.length === 0) return 0;
  return (str[0] !== ' ' ? 1 : 0) + countLetters6(str.slice(1));
}

//array filter
function countLetters7(str) {
  return str.split('').filter(char => char !== ' ').length;
}

console.log(countLetters1("hello world"));
console.log(countLetters2("hello world"));
console.log(countLetters3("hello world"));
console.log(countLetters4("hello world"));
console.log(countLetters5("hello world"));
console.log(countLetters6("hello world"));
console.log(countLetters7("hello world"));
//for()
//if()
let countVowels1 = str => {
  let counter = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o') {
      counter++;
    }
  }
  return counter;
}
console.log(countVowels1("hello"));

//forEach()
//if()
//match()
let countVowels2 = str => {
  let counter = 0;
  str.split('').forEach(char => {
    if (char.match(/[aiueo]/gi)) {
      counter++;
    }
  })
  return counter;
}
console.log(countVowels2("hello"));

//reduce()
//if()
//match()
let countVowels3 = str => {
  return str.split('').reduce((counter, char) => {
    if (char.match(/[aiueo]/gi)) {
      counter++;
    }
    return counter;
  },0)
}
console.log(countVowels3("hello"));

//filter()
//split()
//filter()
//match()
let countVowels4 = str => {
  return str.split('')
    .filter(char => char.match(/[aiueo]/gi)).length;
}

console.log(countVowels4("hello"));

//match()
//itenary()
let countVowels5 = str => {
  const matches = str.match(/[aiueo]/gi);
  return matches ? matches.length : 0;
}
console.log(countVowels5("hello"));

//for(..of..)
//if()
//includes()
//toLowerCase()
let countVowels6 = str => {
  let counter = 0;
  const vowels = 'aiueo';
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      counter++;
    }
  }
  return counter;
}
console.log(countVowels6('hello'));
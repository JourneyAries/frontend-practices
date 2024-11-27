//for()
//if()
//else if()
let countWords1 = sentence => {
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

console.log(countWords1("Hello world"));

//forEach()
//split()
let countWords2 = sentence => {
  let counter = 0;
  sentence.split(' ').forEach(() => {
    counter++;
  })
  return counter;
}
console.log(countWords2("Hello world"));


//for(..of..)
//if()
let countWords3 = sentence => {
  let counter = 0;
  for (let word of sentence.split(' ')) {
    if (word !== '') {
      counter++
    }
  }
  return counter;
}
console.log(countWords3("Hello world"));

//split()
//filter()
let countWords4 = sentence => {
  return sentence.split(' ').filter(word => word.length > 0).length;
}
console.log(countWords4("Hello world"));

//split()
//reduce()
//itenary
let countWords5 = sentence => {
  return sentence.split(' ')
    .reduce((counter, word) => word.length > 0 ? counter + 1 : counter, 0);
}
console.log(countWords5("Hello world"));
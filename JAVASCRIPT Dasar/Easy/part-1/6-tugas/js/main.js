//6. Hitung Vokal dalam String
//Fungsi: countVowels(str)
//Parameter: str (string)
//Hint: Loop dan cek jika huruf adalah vokal.
//Contoh Pemanggilan: countVowels("hello") // 2

//for loop
function countVowels1(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o') {
      counter++;
    }
  }
  return counter;
}

//forEach
function countVowels2(str) {
  let counter = 0;
  str.split('').forEach(i => {
    if (i.match(/[aiueo]/gi)){
      counter++;
    }
  });
  return counter;
}

//for in  
function countVowels3(str) {
  let counter = 0;
  for (let i of str) {
    if (i.match(/[aiueo]/gi)){
      counter++;
    }
  }
  return counter;
}

//reduce
function countVowels4(str) {
  return str.split('').reduce((counter, i) => {
    if (i.match(/[aiueo]/gi)) {
      counter++;
    }
    return counter;
  }, 0);
}

//filter
function countVowels5(str) {
  return str.split('').filter(i => i.match(/[aiueo]/gi)).length;
}

//match
function countVowels6(str) {
  const matches = str.match(/[aiueo]/gi);
  return matches ? matches.length : 0;
}

//for of dan includes
function countVowels7(str) {
  let counter = 0;
  const vowels = 'aiueo';

  for (let i of str) {
    if (vowels.includes(i.toLowerCase())) {
      counter++;
    }
  }
  return counter;
}

console.log(countVowels1("hello"));
console.log(countVowels2("hello"));
console.log(countVowels3("hello"));
console.log(countVowels4("hello"));
console.log(countVowels5("hello"));
console.log(countVowels6("hello"));
console.log(countVowels7("hello"));
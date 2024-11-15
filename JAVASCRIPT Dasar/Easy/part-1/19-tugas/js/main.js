//19. Konversi String menjadi CamelCase
//Fungsi: toCamelCase(str)
//Parameter: str (string dengan spasi)
//Hint: Pisahkan dengan split, buat huruf pertama dari setiap kata setelah kata pertama jadi huruf besar.
//Contoh Pemanggilan: toCamelCase("hello world") // "helloWorld"

//split map join
function toCamelCase1(str) {
  return str
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

//split replace
function toCamelCase2(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/\s+/, '');
}

//reduce
function toCamelCase3(str) {
  return str.split(' ').reduce((result, word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return result + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }, '');
}

//forEach
function toCamelCase4(str) {
  const words = str.split(' ');
  let result = words[0].toLowerCase();

  words.slice(1).forEach(word => {
    result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return result;
}

//for loop
function toCamelCase5(str) {
  const words = str.split(' ');
  let result = words[0].toLowerCase();

  for (let i = 1; i < words.length; i++){
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return result;
}

console.log(toCamelCase1("hello world"));
console.log(toCamelCase2("hello world"));
console.log(toCamelCase3("hello world"));
console.log(toCamelCase4("hello world"));
console.log(toCamelCase5("hello world"));
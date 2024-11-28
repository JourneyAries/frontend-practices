//split()
//map()
//if()
//toLowerCase()
//charAt()
//toUpperCase()
//slice()
//toLowerCase()
//join()
let toCamelCase1 = str => {
  return str
    .split(' ').map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}

console.log(toCamelCase1("hello world"));

//replace()
//regex
//itenary()
//toLowerCase()
//toUpperCase()
//replace()
let toCamelCase2 = str => {
  return str
    .replace(/(?:^\w|\b\w)/g, (match, offset) => {
      return offset === 0 ? match.toLowerCase() : match.toUpperCase();
    })
    .replace(/\s+/, '');
};
console.log(toCamelCase2("hello world"));

//reduce()
//split()
//if()
//toLowerCase()
//charAt()
//toUperCase()
//slice()
//toLowerCase()
let toCamelCase3 = str => {
  return str.split(' ').reduce((result, word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return result + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  },'')
}
console.log(toCamelCase3("hello world"));

//forEach()
//split()
//toLowerCase()
//slice()
//forEach()
//charAt()
//toUpperCase()
//slice()
//toLowerCase()
let toCamelCase4 = str => {
  const words = str.split(' ');
  let result = words[0].toLowerCase();

  words.slice(1).forEach(word => {
    result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return result;
}
console.log(toCamelCase4("hello world"));


//for()
//split()
//toUpperCase()
//for()
//charAt()
//toUpperCase()
//slice()
//toLowerCase()
let toCamelCase5 = str => {
  const words = str.split(' ');
  let result = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return result;
};

console.log(toCamelCase5("hello world"));


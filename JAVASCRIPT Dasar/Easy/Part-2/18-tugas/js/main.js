//18. Konversi String menjadi Snake Case
//Fungsi: toSnakeCase(str)
//Parameter: str (string)
//Hint: Ganti spasi dengan _.
//Contoh Pemanggilan: toSnakeCase("hello world") // "hello_world"

//replace
function toSnakeCase1(str) {
  return str.replace(/\s+/g, '_');
}

//for loop
function toSnakeCase2(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++){
    if (str[i] !== ' ') {
      newStr += str[i];
    } else {
      newStr += '_';
    }
  }
  return newStr;
}

//split and join
function toSnakeCase3(str) {
  return str.split(' ').join('_')
}


//map
function toSnakeCase4(str) {
  return str.split(' ').map(word => word.toLowerCase()).join('_');
}

//reduce
function toSnakeCase5(str) {
  return str.split('').reduce((result, char) => {
    return result + (char === ' ' ? '_' : char);
  }, '');
}

//match
function toSnakeCase6(str) {
  return str.match(/\S+/g).join('_');
}

console.log(toSnakeCase1("hello world"));
console.log(toSnakeCase2("hello world"));
console.log(toSnakeCase3("hello world"));
console.log(toSnakeCase4("hello world"));
console.log(toSnakeCase5("hello world"));
console.log(toSnakeCase6("hello world"));
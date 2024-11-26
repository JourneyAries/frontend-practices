//split()
//reverse()
//join()

let reverseString1 = str => {
  return str.split('').reverse().join('');
}

console.log(reverseString1('hello'));

//for()
let reverseString2 = str => {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString2('hello'));

//forEach()
let reverseString3 = str => {
  let newStr = '';
  str.split('').forEach(char => {
    newStr = char + newStr;
  })
  return newStr;
}

console.log(reverseString3('hello'));

//[spread...]
//reverse()
//join()
let reverseString4 = str => {
  return [...str].reverse().join('');
}

console.log(reverseString4('hello'));
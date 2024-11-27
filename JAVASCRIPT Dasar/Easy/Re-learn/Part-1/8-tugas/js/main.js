//split()
//reverse()
//join()
let isPalindrome1 = str => {
  const newStr = str.split('').reverse().join('');
  return str === newStr;
}
console.log(isPalindrome1("madam"));

//for()
let isPalindrome2 = str => {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }
  return str === newStr;
}
console.log(isPalindrome2("madam"));

//forEach()
//split()
let isPalindrome3 = str => {
  let newStr = '';
  str.split('').forEach(char => {
    newStr = char + newStr;
  })

  return str === newStr;
}
console.log(isPalindrome3("madam"));

//reduce()
//split()
let isPalindrome4 = str => {
  const newStr = str.split('').reduce((newStr, char) => char + newStr, '');
  return str === newStr;
}
console.log(isPalindrome4("madam"));

//regex()
//replace()
//toLowerCase()
//split()
//reverse()
//join()
let isPalindrome5 = str => {
  const newStr = str.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
  str = str.split('').reverse().join('');
  return str === newStr;
}
console.log(isPalindrome5("madam"));

//for()
//Math.floor()
//if()
let isPalindrome6 = str => {
  for (let i = 0; i < Math.floor(str.length / 2); i++){
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}
console.log(isPalindrome6("madam"));

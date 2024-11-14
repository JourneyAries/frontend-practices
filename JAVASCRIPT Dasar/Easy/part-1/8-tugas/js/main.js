//8. Periksa Palindrom
//Fungsi: isPalindrome(str)
//Parameter: str (string)
//Hint: Balik string dan bandingkan.
//Contoh Pemanggilan: isPalindrome("madam") // true

//split.reverse.join
function isPalindrome1(str) {
  return str == str.split('').reverse().join('');  
}

//foor loop
function isPalindrome2(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }

  return str === newStr;
}

// forEach
function isPalindrome3(str) {
  let newStr = '';
  str.split('').forEach(item => {
    newStr += item;
  });
  return str === newStr;
}

// reduce
function isPalindrome4(str) {
  const reversedStr = str.split('').reduce((acc, char) => char + acc, '');
  return str === reversedStr;
}

//every
function isPalindrome5(str) {
  return str.split('').every((item, i) => item === str[str.length - i - 1]);
}

// regex
function isPalindrome6(str) {
  const newStr = str.replace(/[a-zA-Z0-9]/gi, '').toLowerCase();
  return newStr === newStr.split('').reverse().join('');
}

//filter
function isPalindrome7(arr) {
  const newStr = arr.split('');
  return newStr.filter((char, i) => char === arr[arr.length - i - 1]).length === arr.length;
}


console.log(isPalindrome1("madam"));
console.log(isPalindrome2("madam"));
console.log(isPalindrome3("madam"));
console.log(isPalindrome4("madam"));
console.log(isPalindrome5("madam"));
console.log(isPalindrome6("madam"));
console.log(isPalindrome7("madam"));
// 19. Periksa Palindrom
// Buat fungsi isPalindrome(word) untuk memeriksa apakah kata adalah palindrom.

// Hint:
// Balikkan string menggunakan metode string.
// Bandingkan string asli dengan string yang dibalik.

// console.log(isPalindrome("radar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false

//split, reverse, join
function isPalindrome1(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

console.log(isPalindrome1("radar"));
console.log(isPalindrome1("hello"));

//for loop
function isPalindrome2(word) {
  const len = word.length;
  
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome2("radar"));
console.log(isPalindrome2("hello")); 

//rekursi
function isPalindrome3(word) {
  if (word.length <= 1) {
    return true;
  }
  if (word[0] !== word[word.length - 1]) {
    return false;
  }

  return isPalindrome(word.slice(1, word.length - 1));
}

console.log(isPalindrome3("radar"));
console.log(isPalindrome3("hello"));

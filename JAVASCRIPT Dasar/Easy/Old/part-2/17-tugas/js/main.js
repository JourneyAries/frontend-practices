//17. Mengecek Palindrome
//Buat fungsi isPalindrome(str) yang mengembalikan true jika string tersebut adalah palindrome (sama jika dibaca dari depan dan belakang), dan false jika tidak.
//Contoh: isPalindrome("madam") mengembalikan true.

function isPalindrom(str) { 
  for (let i = 0; i < str.length / 2; i++){
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrom('113321'));
//12. Menghitung Panjang Kata Terpanjang
//Buat fungsi longestWordLength(str) yang menerima sebuah string dan mengembalikan panjang dari kata terpanjang dalam string tersebut
//Contoh: longestWordLength("I love JavaScript") mengembalikan 10.

function longestWordLength(str) {
  let newStr = '';
  let temp = '';
  for (let i = 0; i < str.length; i++){
    if (str[i] != ' '){
      temp += str[i];
    } else {
      if (temp.length > newStr.length) { 
        newStr = temp;
      }
      temp = '';
    }
  }
  
  if (temp.length > newStr.length) {
    newStr = temp;
  }

  return newStr.length;
}

console.log(longestWordLength('I love JavaScript'));
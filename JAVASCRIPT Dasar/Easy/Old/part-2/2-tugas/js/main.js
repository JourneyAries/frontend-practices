//2. Membalikkan String
//Buat fungsi reverseString(str) yang menerima sebuah string dan mengembalikan string tersebut dalam urutan terbalik
//Contoh: reverseString("hello") mengembalikan "olleh".

function reverseString(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString('hello'));
//5. Balik String
//Fungsi: reverseString(str)
//Parameter: str (string)
//Hint: Ubah ke array, reverse, lalu join.
//Contoh Pemanggilan: reverseString("hello") // "olleh"

//methode spplit, reverse, join
function reverseString1(str) {
  return str.split('').reverse().join('');
}

//for loop
function reverseString2(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}

//forEach
function reverseString3(str) {
  let newStr = '';

  str.split('').forEach(i => {
    newStr = i + newStr;
    // cara yang benar, artinya menambahkan huruf ke belakang
    // newStr += i; sama kayak newStr = newStr + i;
  });
  return newStr;
}

//spread operator
function reverseString4(str) {
  return [...str].reverse().join('');
}

console.log(reverseString1('hello'));
console.log(reverseString2('hello'));
console.log(reverseString3('hello'));
console.log(reverseString4('hello'));
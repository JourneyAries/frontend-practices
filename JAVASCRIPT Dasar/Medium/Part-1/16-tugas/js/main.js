// 16. Kalkulator Jumlah Karakter
// Buat fungsi countCharacters(text) untuk menghitung jumlah karakter (tidak termasuk spasi).

// Hint:
// Hilangkan spasi dari string menggunakan metode string.
// Hitung panjang string.

// console.log(countCharacters("Hello World")); // Output: 10

//regex 
function countCharacters1(text) {
  return text.replace(/\s+/g, '').length;
}

//split join
function countCharacters2(text) {
  return text.split(' ').join('').length;
}

//split join
function countCharacters3(text) {
  let count = 0;

  for(let char of text){
    if (char !== ' ') {
      count++;
    }
  }

  return count;
}

//filter array
function countCharacters4(text) {
  return [...text].filter(char => char !== ' ').length;
}

console.log(countCharacters1("Hello World"));
console.log(countCharacters2("Hello World"));
console.log(countCharacters3("Hello World"));
console.log(countCharacters4("Hello World"));
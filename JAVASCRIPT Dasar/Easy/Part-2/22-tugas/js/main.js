//22. Cek Apakah Sebuah String Huruf Kapital Semua
//Fungsi: isAllUpperCase(str)
//Parameter: str (string)
//Hint: Bandingkan string dengan versi .toUpperCase.
//Contoh Pemanggilan: isAllUpperCase("HELLO") // true

//toUpperCase
function isAllUpperCase1(str) {
  return str === str.toUpperCase();
}

//for loop
function isAllUpperCase2(str) {
  for (let i = 0; i < str.length; i++){
    if (str[i] !== str[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}

//every
function isAllUpperCase3(str) {
  return [...str].every(char => char === char.toUpperCase());
}

//regex test
function isAllUpperCase4(str) {
  return /^[A-Z]*$/.test(str);
}

  
console.log(isAllUpperCase1("HELLO"));
console.log(isAllUpperCase2("HELLO"));
console.log(isAllUpperCase3("HELLO"));
console.log(isAllUpperCase4("HELLO"));
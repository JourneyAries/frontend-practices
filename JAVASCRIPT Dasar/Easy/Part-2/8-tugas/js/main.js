//8. Mengembalikan String dengan Huruf Kapital di Awal
//Fungsi: capitalizeFirstLetter(str)
//Parameter: str (string)
//Hint: Ubah huruf pertama dengan .toUpperCase().
//Contoh Pemanggilan: capitalizeFirstLetter("hello") // "Hello"

//charAt
const capitalizeFirstLetter1 = str => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

//substring
const capitalizeFirstLetter2 = str => {
  return str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
}

//split, map, join
const capitalizeFirstLetter3 = str => {
  return str
    .split('')
    .map((char, index) => index === 0 ? char.toUpperCase() : char.toLowerCase())
    .join('');
}

//regex replace
const capitalizeFirstLetter4 = str => {
    return str.replace(/^(\w)(.*)/, (_, firstChar, rest) => {
    return firstChar.toUpperCase() + rest.toLowerCase();
  });
}


console.log(capitalizeFirstLetter1("hello"));
console.log(capitalizeFirstLetter2("hello"));
console.log(capitalizeFirstLetter3("hello"));
console.log(capitalizeFirstLetter4("hello"));
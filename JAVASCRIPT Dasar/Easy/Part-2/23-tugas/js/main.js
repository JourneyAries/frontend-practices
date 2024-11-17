//23. Mengganti Karakter dalam String
//Fungsi: replaceChar(str, target, replacement)
//Parameter: str (string), target (char), replacement (char)
//Hint: Gunakan metode .replaceAll.
//Contoh Pemanggilan: replaceChar("hello", "l", "z") // "hezzo"

//replaceAll
function replace1(str, target, replacement) {
  return str.replaceAll(target, replacement);
}

//split join
function replace2(str, target, replacement) {
  return str.split(target).join(replacement);
}

//replace regExp
function replace3(str, target, replacement) {
  return str.replace(new RegExp(target, 'g'), replacement)
}

console.log(replace1("hello", "l", "z"));
console.log(replace2("hello", "l", "z"));
console.log(replace3("hello", "l", "z"));
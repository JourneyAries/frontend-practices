// 3. Filter Kata Tersembunyi (Moderasi Chat)
// Buat fungsi filterBadWords(message) yang menggantikan kata kasar dengan ****.

// Hint:
// Buat fungsi bernama filterBadWords.
// Terima satu argumen berupa string message.
// Buat daftar kata kasar dalam array, misalnya: ["bad", "ugly"].
// Gantikan kata kasar dengan **** menggunakan metode string atau regex.

// console.log(filterBadWords("You are bad and ugly!"));
// Output: "You are **** and ****!"

//replace dan regex
function filterBadWords1(message) {
  const badWords = ['bad', 'ugly'];

  const regex = new RegExp(badWords.join('|'), 'gi');
  return message.replace(regex, '*****');
}

//forEach
function filterBadWords2(message) {
  const badWords = ['bad', 'ugly'];

  badWords.forEach(word => {
    message = message.replace(new RegExp(`\\b${word}\\b`, 'gi'), '****');
  });

  return message;
}

console.log(filterBadWords1("You are bad and ugly!"))
console.log(filterBadWords2("You are bad and ugly!"))
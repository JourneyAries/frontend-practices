//4. Permainan Tebak Huruf
//Buat fungsi guessLetter(secretWord, letter) yang menerima secretWord dan letter, lalu mengembalikan true jika huruf itu ada dalam kata, atau false jika tidak.


function randomLetter() {
  const word = 'aku';
  let randomLetter = word[Math.floor(Math.random() * word.length)];
  return randomLetter;
}

function guessLetter(letter) {
  const secretLetter = randomLetter();
  if (letter == secretLetter) {
    return `BENAR, Karakter tersebut adalah '${secretLetter}'`;
  } else {
    return `SALAH, Karakter tersebut adalah '${secretLetter}'`
  }
}

console.log(guessLetter('a'));
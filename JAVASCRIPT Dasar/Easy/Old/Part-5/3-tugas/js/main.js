//3. Tebak Angka
//Buat fungsi guessNumber(secret, guess) yang menerima angka secret dan guess, dan mengembalikan "benar", "terlalu rendah", atau "terlalu tinggi" berdasarkan tebakan.

function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

function checkNumber(guessNum, secretNum) {
  if (guessNum == secretNum) {
    return 'Tebakan BENAR';
  } else if (guessNum > secretNum) {
    return 'Tebakan TERLALU TINGGI';
  } else {
    return 'Tebakan TERLALU RENDAH';
  }
}

function guessNumber(guessNum) {
  let secretNum = randomNumber();
  console.log('Masukan tebakan anda: ');
  let result = checkNumber(guessNum, secretNum);
  return result;
}

console.log(guessNumber(3))
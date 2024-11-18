// 4. Game Tebak Angka
// Buat fungsi guessNumber(secretNumber, guess) yang membandingkan tebakan dengan angka rahasia.

// Hint:
// Buat fungsi guessNumber.
// Bandingkan guess dengan secretNumber.
// Return:
// "Terlalu besar" jika guess > secretNumber.
// "Terlalu kecil" jika guess < secretNumber.
// "Benar!" jika sama.

// console.log(guessNumber(50)); Output: "Terlalu besar"
// console.log(guessNumber(42)); Output: "Benar!"

const secret = Math.floor(Math.random() *10) + 1;

function guessNumber(guess) {
  if (typeof guess !== 'number' || guess < 1 || guess > 10) {
    return 'Masukan angka antara 1-10';
  }

  if (secret === guess) {
    return 'Benar';
  } else if (guess < secret) {
    return 'Terlalu kecil';
  } else{
    return 'Terlalu Besar';
  }
}

console.log(secret);
console.log(guessNumber(3));
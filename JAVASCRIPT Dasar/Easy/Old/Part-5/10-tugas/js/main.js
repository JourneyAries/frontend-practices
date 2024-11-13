//10. Permainan Bingo
//Buat fungsi checkBingoCard(card, number) yang menerima array card dan number. Jika number ada di dalam card, kembalikan true; jika tidak, kembalikan false.
let card = [1, 2, 3, 4, 5];

function checkBingoCard(number) {
  if (card.includes(number)) {
    return `SELAMAT KAMU MENANG`;
  } else {
    return `Kalah lu bro`;
  }
}

console.log(checkBingoCard(9));
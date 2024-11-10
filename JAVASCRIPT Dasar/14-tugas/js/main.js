//14. Simulasi Dadu Dua Kali
//Buat fungsi rollTwoDice() yang mensimulasikan dua dadu yang dilempar, lalu mengembalikan total dari hasil kedua dadu tersebut.

function rollTwoDice() {
  let diceOne = (Math.floor(Math.random() * 6) + 1);
  let diceTwo = (Math.floor(Math.random() * 6) + 1);
  return `Dadu Pertama: ${diceOne}, Dadu Kedua: ${diceTwo} \n Total: ${diceOne + diceTwo}`;
}

console.log(rollTwoDice());
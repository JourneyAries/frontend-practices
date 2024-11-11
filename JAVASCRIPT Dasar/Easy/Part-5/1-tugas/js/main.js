//1. Lempar Dadu
//Buat fungsi rollDice() yang mengembalikan angka acak antara 1 hingga 6, mensimulasikan lemparan dadu.

function rollDice() {
  return Math.floor((Math.random()*6)+1);
}

console.log(rollDice());
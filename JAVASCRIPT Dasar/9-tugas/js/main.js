//9. Simulasi Koin
//Buat fungsi flipCoin() yang mengembalikan "kepala" atau "ekor" secara acak.

function flipCoin() {
  let faceCoin = ['kepala', 'ekor'];
  return faceCoin[Math.floor(Math.random() * faceCoin.length)];
}

console.log(flipCoin());
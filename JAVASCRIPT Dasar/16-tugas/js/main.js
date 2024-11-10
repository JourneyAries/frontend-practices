//16. Hitung Skor Permainan
//Buat fungsi calculateGamePoints(level, coins, bonus) yang menghitung skor berdasarkan level, coins, dan bonus dengan formula level * 100 + coins + bonus.

function calculateGamePoints(level, coins, bonus) {
  return level * 100 + coins + bonus;
}

console.log(calculateGamePoints(10, 2500, 400));
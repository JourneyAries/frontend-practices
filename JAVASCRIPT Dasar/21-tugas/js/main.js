//21. Life Counter dalam Game
//Buat fungsi updateLives(currentLives, change) yang menerima jumlah currentLives dan change (positif atau negatif), lalu mengembalikan jumlah nyawa baru.

function updateLives(currentLives, change) {
  return currentLives += change;
}

console.log(updateLives(2, -1));
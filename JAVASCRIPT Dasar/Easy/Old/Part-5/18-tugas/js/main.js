//18. Simulasi Poin dalam Game Memory
//Buat fungsi memoryGamePoints(correctPairs, attempts) yang menghitung poin berdasarkan jumlah pasangan yang benar dan total percobaan, dengan formula correctPairs * 10 - attempts * 2.

function memoryGamePoints(correctPairs, attempts) {
  return correctPairs * 10 - attempts * 2;
}

console.log(memoryGamePoints(2, 5));
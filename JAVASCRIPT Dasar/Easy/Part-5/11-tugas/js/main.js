//11. Urutkan Skor Tertinggi
//Buat fungsi sortScores(scores) yang menerima array scores dan mengembalikan array yang diurutkan dari skor tertinggi ke terendah.

function sortScores(scores) {
  return scores.sort((b, a) => a - b);
}

console.log(sortScores([20,30,10,50]));
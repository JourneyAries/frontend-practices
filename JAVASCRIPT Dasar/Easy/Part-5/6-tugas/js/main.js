//6. Hitung Poin Skor Game
//Buat fungsi calculateScore(pointsArray) yang menerima array angka dan mengembalikan jumlah total poin yang dihitung dari array tersebut.

function calculateScore(score) {
  return score.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(calculateScore([2,3,4]));
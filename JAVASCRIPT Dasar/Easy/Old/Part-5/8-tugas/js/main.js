//8. Hitung Langkah Menuju Tujuan
//Buat fungsi stepsToGoal(current, goal, stepSize) yang mengembalikan jumlah langkah yang dibutuhkan untuk mencapai goal dari current dengan langkah sebesar stepSize.

function stepsToGoal(current, goal, stepSize) {
  let distance = goal - current;
  return Math.ceil(distance / stepSize);
}

console.log(stepsToGoal(2,10,3));


// 2. Sistem Penilaian Sederhana (e-Learning)
// Buat fungsi calculateGrade(score) yang mengubah skor menjadi nilai huruf (A, B, C, D, F).

// Hint:
// Buat fungsi bernama calculateGrade.
// Tentukan aturan:
// Skor 90 ke atas: A
// Skor 80-89: B
// Skor 70-79: C
// Skor 60-69: D
// Skor di bawah 60: F.
// Gunakan if atau switch untuk menentukan nilai.

// console.log(calculateGrade(85)); // Output: B

//switch
const calculateGrade1 = score => {
  switch (true) {
    case (score >= 90 && score <= 100):
      return 'A';
    case (score >= 80 && score <= 89):
      return 'B';
    case (score >= 70 && score <= 79):
      return 'C';
    case (score >= 60 && score <= 69):
      return 'D';
    case (score < 60):
      return 'F';
  }
}

//if else
const calculateGrade2 = score => {
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score <= 89) {
    return 'B';
  } else if (score >= 70 && score <= 79) {
    return 'C';
  } else if (score >= 60 && score <= 69) {
    return 'D';
  } else if (score < 60) {
    return 'F';
  }
}

//array dan operasi matematika
const calculateGrade3 = score => {
  const grades = ['F', 'D', 'C', 'B', 'A'];
  return grades[Math.floor(score / 10) - 5] || 'F';

}


console.log(calculateGrade1(85));
console.log(calculateGrade2(85));
console.log(calculateGrade3(85));
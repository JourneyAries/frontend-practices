// Studi Kasus 5: Mengubah Nilai dalam Objek (Level 5 - Very Hard)

let Students = [
  {
    name: 'Udin',
    grade: [80, 75, 88],
    passed: false,
  },
  {
    name: 'Panjul',
    grade: [56, 60, 50],
    passed: false,
  },
  {
    name: 'Paul',
    grade: [88, 80, 90],
    passed: false,
  },
];

function calculateAverageGrade(grades) {
  let total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}

function updatePassStatus(students) {
  students.forEach(student => {
    let average = calculateAverageGrade(student.grade);

    if (average >= 70) {
      student.passed = true;
    } else {
      student.passed = false;
    }
  });
}

updatePassStatus(Students);
console.log(Students);
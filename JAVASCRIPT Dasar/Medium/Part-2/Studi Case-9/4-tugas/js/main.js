// Studi Kasus 4: Perbandingan dengan Object.is() (Level 4 - Hard)
// Deskripsi: Gunakan Object.is() untuk membandingkan dua nilai atau objek yang memiliki tipe data yang sama.

const num1 = 0;
const num2 = -0;

function compareWithObjectIs(num1, num2) {
  console.log(Object.is(num1, num2)); // Output: false (karena 0 dan -0 dianggap berbeda)
}

compareWithObjectIs(num1, num2);

//Studi Kasus 1: Perbandingan Tipe Data Primitif (Level 1 - Easy)
//Deskripsi: Bandingkan dua nilai tipe data primitif seperti angka, string, atau boolean menggunakan operator perbandingan.

const num1 = 10;
const num2 = 10;

function comparePrimitiveValues(num1, num2) {
  console.log(num1 == num2);  // true: karena nilai dan tipe data keduanya sama
  console.log(num1 === num2); // true: karena nilai dan tipe data keduanya sama
  console.log(num1 != num2);  // false: karena nilai keduanya sama
  console.log(num1 !== num2); // false: karena nilai dan tipe data keduanya sama
}

comparePrimitiveValues(num1, num2);

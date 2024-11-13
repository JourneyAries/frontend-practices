//5. Faktor dari Sebuah Bilangan
//Buat fungsi findFactors(num) yang menerima sebuah bilangan bulat dan mengembalikan array dari semua faktor bilangan tersebut.
// Contoh: findFactors(12) mengembalikan [1, 2, 3, 4, 6, 12].

function findFactors(num) {
  let newNum = '';
  for (let i = 1; i <= num; i++){
    if (num % i == 0) {
      newNum += i;
      if (i < num) {
        newNum += ', ';
      }
    }
  }
  return `[${newNum}]`;
}

console.log(findFactors(12));
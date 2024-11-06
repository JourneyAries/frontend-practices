// 24. Menjumlahkan Bilangan Genap dari 1 hingga N
// Buat fungsi sumEvenNumbers(n) yang mengembalikan jumlah semua bilangan genap dari 1 hingga n.
// Contoh: sumEvenNumbers(10) mengembalikan 30.

function sumEvenNumbers(num) {
  let totalNum = 0;
  for (let i = 1; i <= num; i++){
    if (i % 2 == 0) {
      totalNum += i;
    }
  }
  return totalNum;
}

console.log(sumEvenNumbers(10));
// 1. Menjumlahkan Angka dari 1 hingga N
// Buatlah fungsi sumToN(n) yang menerima satu parameter n dan mengembalikan jumlah dari semua angka dari 1 hingga n.
// Contoh: sumToN(5) mengembalikan 15 (1 + 2 + 3 + 4 + 5).

function sumToN(value) {
  let total = 0;
  let prosesPenjumlahan = '';
  for (let i = 1; i <= value; i++){
    total += i;
    prosesPenjumlahan += i;
    if (i < value) { 
      prosesPenjumlahan += ' + '
    }
  }
  return `${total} (${prosesPenjumlahan})`;
}

console.log(sumToN(5));
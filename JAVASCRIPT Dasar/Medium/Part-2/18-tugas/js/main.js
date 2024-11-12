//19. Menjumlahkan Nilai yang Ganjil
//Buat fungsi sumOdd(arr) yang menjumlahkan nilai-nilai ganjil dalam array arr.

function sumOdd(arr) {
  let sum = 0;

  arr.forEach(e => {
    if (e % 2 !== 0) {
      sum += e;
    }
  });

  return sum;
}

console.log(sumOdd([1, 2, 3, 4, 5]));
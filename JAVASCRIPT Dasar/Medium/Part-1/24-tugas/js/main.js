//24. Mengonversi Array Bilangan Bulat ke Bilangan Positif
//Buat fungsi toAbsoluteValues(arr) yang menerima array bilangan bulat arr dan mengubah semua elemen menjadi nilai positifnya.

function toAbsoluteValues(arr) {
  return arr.map(num => Math.abs(num));
}

console.log(toAbsoluteValues([-1, -3, 4]));
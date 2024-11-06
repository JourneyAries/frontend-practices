//17. Menggunakan Math.random()
//Buat fungsi randomInteger(max) yang menghasilkan bilangan bulat acak dari 0 hingga max.
//Contoh: randomInteger(5) bisa mengembalikan angka antara 0 hingga 5.

function randomInteger(max) {
  return Math.floor(Math.random()*max);
}

console.log(randomInteger(5));
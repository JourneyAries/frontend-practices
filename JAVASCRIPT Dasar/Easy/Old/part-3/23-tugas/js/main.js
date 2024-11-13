//23. Menggunakan Math.ceil() dan Math.floor()
//Buat fungsi roundNumber(num) yang mengembalikan objek dengan hasil pembulatan ke atas, ke bawah, dan ke angka terdekat dari num.
//Contoh: roundNumber(4.6) mengembalikan { ceil: 5, floor: 4, round: 5 }.

function roundNumber(num) {
  return `ceil: ${Math.ceil(num)}, floor: ${Math.floor(num)}, round: ${Math.round(num)}`;
}

console.log(roundNumber(4.6));
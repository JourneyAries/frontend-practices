//9. Menggunakan Array.prototype.every()
//Buat fungsi allPositive(arr) yang mengembalikan true jika semua angka dalam array arr adalah positif, dan false jika ada angka negatif.
//Contoh: allPositive([1, 2, 3]) mengembalikan true.


function allPositive(arr) {
  return arr.every(sum => sum > 0);
}

console.log(allPositive([1, 2, 3]));
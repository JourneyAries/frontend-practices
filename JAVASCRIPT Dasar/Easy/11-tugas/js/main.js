//11. Menggunakan Array.prototype.sort()
//Buat fungsi sortDescending(arr) yang mengurutkan elemen dalam array arr dari yang terbesar ke terkecil.
//Contoh: sortDescending([3, 1, 4, 2]) mengembalikan [4, 3, 2, 1].

function sortDescending(arr) {
  return arr.sort((b, a) => a - b);
}

console.log(sortDescending([3, 1, 4, 2]));
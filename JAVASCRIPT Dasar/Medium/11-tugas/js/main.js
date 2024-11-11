//11. Menghitung Karakter Unik
//Buat fungsi countUniqueCharacters(str) yang menerima string str dan mengembalikan jumlah karakter unik di dalamnya.

function countUniqueCharacters(str) {
  const uniqueCharacters = new Set(str);
  return uniqueCharacters.size;
}

console.log(countUniqueCharacters("javascript"));
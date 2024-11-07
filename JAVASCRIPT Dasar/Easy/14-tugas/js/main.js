//14. Menggunakan Array.prototype.flatMap()
//Buat fungsi doubleAndFlatten(arr) yang menerima array bersarang (nested array) dan mengembalikan array satu dimensi di mana setiap elemen di dalamnya dikalikan dua.
//Contoh: doubleAndFlatten([1, [2, 3], 4]) mengembalikan [2, 4, 6, 8].

function doubleAndFlatten(arr) {
  return arr.flatMap(num => Array.isArray(num) ? num.map(n => n * 2) : num * 2);
}

console.log(doubleAndFlatten([1, [2, 3], 4]));
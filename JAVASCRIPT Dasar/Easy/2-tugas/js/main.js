//2. Menggunakan Array.prototype.map()
//Buat fungsi doubleValues(arr) yang menerima array angka dan mengembalikan array baru di mana setiap elemen adalah hasil dari elemen asli dikali dua.
//Contoh: doubleValues([1, 2, 3]) mengembalikan [2, 4, 6].


function doubleValues(arr) {
  return arr.map(function (num) {
    return num * 2;
  });
}

console.log(doubleValues([1, 2, 3]));
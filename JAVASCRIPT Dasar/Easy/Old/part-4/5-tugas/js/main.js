//5. Menggunakan Array.prototype.fill()
//Buat fungsi fillArray(value, length) yang mengembalikan array berisi length elemen yang semuanya memiliki nilai value.
//Contoh: fillArray(3, 4) mengembalikan [3, 3, 3, 3].

function fillArray(value, length) {
  return Array(length).fill(value);
}

console.log(fillArray(3, 4));
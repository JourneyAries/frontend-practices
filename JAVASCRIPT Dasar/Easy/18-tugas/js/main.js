//18. Menggunakan Array.prototype.splice()
//Buat fungsi removeElements(arr, start, count) yang menghapus count elemen dari arr mulai dari indeks start.
//Contoh: removeElements([1, 2, 3, 4], 1, 2) mengembalikan [1, 4].

function removeElements(arr, start, count) {
  arr.splice(start, count);
  return arr;
}

console.log(removeElements([1, 2, 3, 4], 1, 2));


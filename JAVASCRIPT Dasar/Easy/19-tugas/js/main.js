//19. Menggunakan Array.prototype.slice()
//Buat fungsi getFirstNElements(arr, n) yang mengembalikan array berisi n elemen pertama dari array arr.
//Contoh: getFirstNElements([1, 2, 3, 4], 2) mengembalikan [1, 2].

function getFirstNElements(arr, n) {
  return arr.slice(0,n);
}

console.log(getFirstNElements([1, 2, 3, 4], 2));
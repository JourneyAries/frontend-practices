//11. Menggunakan Array.prototype.shift()
//Buat fungsi removeFirstElement(arr) yang menghapus elemen pertama dari arr dan mengembalikan elemen yang dihapus tersebut.
//Contoh: removeFirstElement([1, 2, 3]) mengembalikan 1.

function removeFirstElement(arr) {
  return arr.shift();
}

console.log(removeFirstElement([1, 2, 3]));
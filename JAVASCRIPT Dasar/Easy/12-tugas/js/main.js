//12. Menggunakan Array.prototype.pop()
//Buat fungsi removeLastElement(arr) yang menghapus elemen terakhir dari arr dan mengembalikan elemen yang dihapus tersebut.
//Contoh: removeLastElement([1, 2, 3]) mengembalikan 3.

function removeLastElement(arr) {
  return arr.pop();
}

console.log(removeLastElement([1, 2, 3]));
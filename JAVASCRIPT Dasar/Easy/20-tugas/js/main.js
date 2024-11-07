//20. Menggunakan String.prototype.slice()
//Buat fungsi removeFirstAndLast(str) yang mengembalikan string str tanpa karakter pertama dan terakhirnya.
//Contoh: removeFirstAndLast("hello") mengembalikan "ell".

function removeFirstAndLast(str) {
  return str.slice(1, str.length - 1);
}

console.log(removeFirstAndLast("hello"));
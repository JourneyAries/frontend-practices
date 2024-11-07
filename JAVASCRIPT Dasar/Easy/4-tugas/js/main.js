//4. Menggunakan Number.isInteger()
//Buat fungsi isInteger(num) yang mengembalikan true jika num adalah bilangan bulat, dan false jika tidak.
//Contoh: isInteger(4.5) mengembalikan false.

function isInteger(num) {
  return Number.isInteger(num);
}

console.log(isInteger(4.5));
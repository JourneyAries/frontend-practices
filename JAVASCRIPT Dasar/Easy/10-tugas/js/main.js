//10. Menggunakan Array.prototype.find()
//Buat fungsi findFirstEven(arr) yang mengembalikan bilangan genap pertama dalam array arr.
//Contoh: findFirstEven([1, 3, 4, 6]) mengembalikan 4.

function findFirstEven(arr) {
  return arr.find(num => num % 2 == 0);
}

console.log(findFirstEven([1, 3, 4, 6]));
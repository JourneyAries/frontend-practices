//4. Menggunakan Array.prototype.filter()
//Buat fungsi filterOddNumbers(arr) yang mengembalikan array yang hanya berisi angka ganjil dari array arr.
//Contoh: filterOddNumbers([1, 2, 3, 4, 5]) mengembalikan [1, 3, 5].


function filterOddNumbers(arr) {
  return arr.filter(function (num) {
    return num % 2 !== 0;
  })
}

console.log(filterOddNumbers([1, 2, 3, 4, 5]));
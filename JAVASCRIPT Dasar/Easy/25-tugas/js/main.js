//25. Memfilter Kata dengan Panjang Tertentu
//Buat fungsi filterByLength(arr, length) yang menerima array kata dan sebuah angka panjang, lalu mengembalikan array yang hanya berisi kata dengan panjang tersebut.
// Contoh: filterByLength(["apple", "kiwi", "banana"], 5) mengembalikan ["apple"].

function filterByLength(arr, length) {
  for (let word of arr) { 
    if (word.length == length) {
      return `[${word}]`;
    }
  }
}

console.log(filterByLength(["apple", "kiwi", "banana"], 5) );
//3. Menghitung Jumlah Huruf Vokal
//Buat fungsi countVowels(str) yang menerima sebuah string str dan mengembalikan jumlah huruf vokal di dalamnya.

function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if (char.match(/[aeiou]/)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript"));
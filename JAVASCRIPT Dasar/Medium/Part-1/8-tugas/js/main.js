//4. Mengelompokkan Angka Berdasarkan Sifat
//Buat fungsi groupNumbers(numbers) yang menerima array numbers dan mengembalikan objek dengan dua properti: positive untuk angka positif dan negative untuk angka negatif.

function groupNumbers(nums) {
  return {
    positive: nums.filter(num => num > 0),
    negative: nums.filter(num => num < 0)
  }
}

console.log(groupNumbers([1, -2, 3, -4, 5]));
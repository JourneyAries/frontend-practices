//10. Mencari Nilai yang Tidak Berpasangan
//Buat fungsi findUnpaired(numbers) yang menerima array numbers di mana setiap angka muncul berpasangan kecuali satu angka, dan mengembalikan angka yang tidak berpasangan.

function findUnpaired(nums) {
  let newNums = new Set(nums);
  return newNums.size;
}

console.log(findUnpaired([1, 2, 3, 2, 1]));
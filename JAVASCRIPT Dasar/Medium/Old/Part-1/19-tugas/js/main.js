//19. Menemukan Angka Terbesar Kedua
//Buat fungsi secondLargest(numbers) yang menerima array numbers dan mengembalikan angka terbesar kedua dalam array tersebut.

function secondLargest(nums) {
  const sortedNums = nums.sort((a, b) => b - a);
  return sortedNums[1];
}

console.log(secondLargest([10, 5, 8, 12]));
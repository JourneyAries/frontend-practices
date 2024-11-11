//17. Mencari Indeks Nilai Maksimum
//Buat fungsi findMaxIndex(numbers) yang mengembalikan indeks dari nilai maksimum dalam array numbers.

function findMaxIndex(nums) {
  const max = Math.max(...nums);
  return nums.indexOf(max);
}

console.log(findMaxIndex([1, 3, 7, 2]));
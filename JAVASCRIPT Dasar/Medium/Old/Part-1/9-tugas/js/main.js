//5. Mencari Nilai Median
//Buat fungsi findMedian(numbers) yang menerima array numbers dan mengembalikan nilai median dari array tersebut.

function findMedian(nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  let middle = Math.floor(sortedNums.length / 2);

  if (sortedNums.length % 2 !== 0) {
    return sortedNums[middle];
  }else{
    return (sortedNums[middle - 1] + sortedNums[middle] / 2);
  }
}

console.log(findMedian([1, 3, 4, 2, 5, 4]));
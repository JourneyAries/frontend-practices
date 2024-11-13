//17. Pasangan Angka dalam Game
//Buat fungsi findMatchingPairs(arr, targetSum) yang menerima array arr dan mengembalikan jumlah pasangan angka yang jika dijumlahkan sama dengan targetSum.

function findMatchingPairs(arr, targetSum) {
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] + arr[j] === targetSum) {
        count++;
      }
    }
  }
  return count;
}

console.log(findMatchingPairs([1,2,3,4,5], 6));
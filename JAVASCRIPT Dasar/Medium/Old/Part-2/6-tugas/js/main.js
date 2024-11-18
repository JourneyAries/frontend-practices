//6. Mencari Nilai Terbesar dalam Subarray
//Buat fungsi findMaxInSubarray(arr, start, end) yang menerima array arr, dan dua indeks start dan end, dan mengembalikan nilai terbesar dalam subarray yang ditentukan oleh start dan end.

function findMaxInSubarray(arr, start, end) {
  const subArray = arr.slice(start, end + 1);
  return Math.max(...subArray);
}

console.log(findMaxInSubarray([1, 3, 2, 5, 4], 1, 3));
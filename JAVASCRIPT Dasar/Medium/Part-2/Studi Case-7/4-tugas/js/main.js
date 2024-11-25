// Studi Kasus 4: Spread Operator untuk Menggabungkan Array (Level 4 - Hard)
// Deskripsi: Gunakan spread operator untuk menggabungkan dua array menjadi satu array baru.

function mergeArrays(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  return merged;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = mergeArrays(arr1, arr2);

console.log(merged);

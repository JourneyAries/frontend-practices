// 14. Permutasi Array
// Buat fungsi permuteArray(arr) untuk menampilkan semua kombinasi elemen array.

// Hint:
// Gunakan rekursi untuk menghasilkan semua permutasi.

// console.log(permuteArray([1, 2, 3]));
// Output: [ [1,2,3], [1,3,2], [2,1,3], ... ]

function permuteArray(arr) {
  const result = [];

  const permute = (current, remaining) => {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      permute(
        [...current, remaining[i]],
        [...remaining.slice(0, i), ...remaining.slice(i + 1)]
      );
    }
  };

  permute([], arr);
  return result;
}

console.log(permuteArray([1, 2, 3]));
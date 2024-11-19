// 23. Pengacak Urutan Array
// Buat fungsi shuffleArray(arr) untuk mengacak urutan elemen dalam array.

// Hint:
// Gunakan metode seperti Math.random untuk menentukan posisi baru setiap elemen.
// Return array baru dengan urutan acak.

// console.log(shuffleArray([1, 2, 3, 4]));
// Output: [3, 1, 4, 2] (acak)

//cara pertama
function shuffleArray(arr) {
  let shuffledArray = arr.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }

  return shuffledArray;
}

console.log(shuffleArray([1, 2, 3, 4]));

//cara kedua
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffleArray([1, 2, 3, 4]));
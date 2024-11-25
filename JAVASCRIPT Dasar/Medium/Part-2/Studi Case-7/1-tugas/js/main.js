// Studi Kasus 1: Destructuring Array (Level 1 - Easy)
// Deskripsi: Buat program untuk mengekstrak nilai dari array menggunakan destructuring.

function extractValues(array) {
  const [first, second, third] = arr;
  console.log(first, second, third);
}
const arr = [1, 2, 3];
extractValues(arr);
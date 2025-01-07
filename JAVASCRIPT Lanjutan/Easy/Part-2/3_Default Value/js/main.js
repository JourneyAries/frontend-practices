// Tugas: Gunakan default value saat nilai tidak ada dalam array

const arr = [1];
const [a, b = 10] = arr;
console.log(a);
console.log(b);

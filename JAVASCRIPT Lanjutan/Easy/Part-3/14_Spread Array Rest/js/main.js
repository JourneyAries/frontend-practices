// Tugas: Ambil elemen terakhir dengan kombinasi rest dan spread

const arr = [1, 2, 3, 4];
const [last, ...rest] = [...arr.reverse()];

console.log(rest.reverse());
console.log(last);

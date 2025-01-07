// Tugas: Sisipkan elemen ke dalam array

const arr = [1, 2, 4, 5];
const newArr = [...arr.slice(0, 2), 3, ...arr.slice(2)];

console.log(newArr);

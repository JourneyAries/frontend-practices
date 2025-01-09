// Tugas: Gunakan `Promise.all` untuk menjalankan beberapa Promise secara bersamaan.

const promise1 = new Promise((resolve) => setTimeout(() => resolve('Task 1'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Task 2'), 1000));

Promise.all([promise1, promise2]).then((results) => console.log(results));

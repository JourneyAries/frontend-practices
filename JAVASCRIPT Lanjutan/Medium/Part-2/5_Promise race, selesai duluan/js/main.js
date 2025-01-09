// Tugas: Gunakan `Promise.race` untuk memilih promise yang pertama selesai.
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Task 1'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Task 2'), 500));

Promise.race([promise1, promise2]).then((results) => console.log(results));

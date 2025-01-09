// Tugas: Gunakan `Promise.allSettled` untuk menangani beberapa Promise, baik yang berhasil atau gagal.
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Success'), 1000));
const promise2 = new Promise((_, reject) => setTimeout(() => reject('Failed'), 500));

Promise.allSettled([promise1, promise2]).then((results) => console.log(results));

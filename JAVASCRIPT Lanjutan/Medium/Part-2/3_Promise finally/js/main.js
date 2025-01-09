// Tugas: Tambahkan blok `finally` untuk menangani kode yang selalu dijalankan.

const myPromise = new Promise((resolve, reject) => {
	resolve('Task Completed');
});

myPromise.then((result) => console.log(result))
  .finally(() => console.log('Always Run'));

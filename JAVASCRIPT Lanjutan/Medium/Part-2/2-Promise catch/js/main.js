// Tugas: Buat Promise yang gagal dan tangani error dengan `catch`.

const myPromise = new Promise((resolve, reject) => {
	reject('Something went wrong');
});

myPromise.catch((error) => console.error(error));

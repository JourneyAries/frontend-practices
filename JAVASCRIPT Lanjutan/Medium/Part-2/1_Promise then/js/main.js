// Tugas: Buatlah Promise sederhana yang berhasil dan mencetak pesan sukses.

const myPromise = new Promise((resolve, reject) => {
	resolve('Promise fullfilled');
});

myPromise.then((result) => console.log(result));
// Tugas: Buat delay menggunakan `await` dengan `Promise` untuk menunda eksekusi.

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runDelayed() {
	console.log('Start');
	await delay(2000);
	console.log('After 2 seconds');
}

runDelayed();

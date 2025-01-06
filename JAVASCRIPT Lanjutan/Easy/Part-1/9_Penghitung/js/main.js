// Tugas: Buat fungsi yang menghitung berapa kali dipanggil

function createCallCounter() {
	let calls = 0;

	return function () {
		calls++;
		console.log(`Function called: ${calls} times`);
	};
}

const counter = createCallCounter();
counter();

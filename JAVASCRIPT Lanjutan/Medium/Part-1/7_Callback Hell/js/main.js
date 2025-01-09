// Tugas: Buat dua operasi asinkron berurutan menggunakan nested callback.
function stepOne(callback) {
	setTimeout(() => {
		console.log('Step 1 complete');
		callback();
	}, 1000);
}

function stepTwo() {
	setTimeout(() => {
		console.log('Step 2 complete');
	}, 1000);
}

stepOne(stepTwo);

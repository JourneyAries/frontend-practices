// Tugas: Jalankan tiga callback secara berurutan.

function taskOne(callback) {
	setTimeout(() => {
		console.log('Task 1 complete');
		callback();
	}, 500);
}

function taskTwo(callback) {
	setTimeout(() => {
		console.log('Task 2 complete');
		callback();
	}, 500);
}

function taskThree(callback) {
	setTimeout(() => {
		console.log('Task 3 complete');
	}, 500);
}

taskOne(() => taskTwo(() => taskThree()));

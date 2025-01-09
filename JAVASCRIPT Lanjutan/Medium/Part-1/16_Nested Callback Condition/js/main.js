// Tugas: Gunakan nested callback untuk membuat kondisi operasi berurutan.

function stepOne(successCallBack, errorCallBack) {
	setTimeout(() => {
		const success = Math.random() > 0.5;
		success ? successCallBack('Step 1 succeeded') : errorCallBack('step 1 failed');
	}, 1000);
}

function stepTwo() {
	console.log('Step 2 executed');
}

stepOne(console.log, console.error);

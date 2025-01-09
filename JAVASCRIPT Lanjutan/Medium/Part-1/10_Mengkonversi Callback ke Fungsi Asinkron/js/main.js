// Tugas: Simulasikan operasi asinkron dengan callback.

function asyncTask(input, callback) {
	setTimeout(() => {
		callback(input * 2);
	}, 1000);
}

asyncTask(5, (result) => console.log(result));

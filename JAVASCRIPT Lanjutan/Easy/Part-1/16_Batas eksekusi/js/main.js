// Tugas: Buat fungsi yang hanya bisa dipanggil maksimal n kali

function createLimitedFunction(fn, limit) {
	let count = 0;

	return function (...args) {
		if (count < limit) {
			count++;
			return fn(...args);
		} else {
			console.log('Function limit reached');
		}
	};
}

const limitedFn = createLimitedFunction((msg) => console.log(msg), 3);
limitedFn('Call 1');
limitedFn('Call 2');
limitedFn('Call 3');
limitedFn('Call 4');
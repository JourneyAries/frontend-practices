// Tugas: Gunakan closure untuk membatasi eksekusi fungsi ke satu kali saja

function createOnceFunction(fn) {
	let executed = false;

	return function (...args) {
		if (!executed) {
			executed = true;
			return fn(...args);
		} else {
			console.log('Function can only be executed once.');
		}
	};
}

const sayHiOnce = createOnceFunction(() => console.log('Hi!'));
sayHiOnce();
sayHiOnce();

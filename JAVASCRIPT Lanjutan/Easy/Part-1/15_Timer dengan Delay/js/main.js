// Tugas: Gunakan closure untuk membuat fungsi dengan delay

function createDelayedFunction(fn, delay) {
	return function (...args) {
		setTimeout(() => fn(...args), delay);
	};
}

const sayHello = createDelayedFunction((name) => console.log(`Hello, ${name}`), 2000);
sayHello('Alice');

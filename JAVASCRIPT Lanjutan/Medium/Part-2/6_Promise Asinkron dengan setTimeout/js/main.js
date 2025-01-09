// Tugas: Gunakan `setTimeout` di dalam Promise untuk membuat simulasi delay.

const delayedPromise = new Promise((resolve) => {
	setTimeout(() => resolve('Delayed Response'), 1000);
});

delayedPromise.then((result) => console.log(result));

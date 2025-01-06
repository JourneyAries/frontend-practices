// Tugas: Buat counter yang bisa di-reset

function createAdvancedCounter() {
	let count = 0;

	function add() {
		count++;
		console.log(`Counter: ${count}`);
	}

	function getCount() {
		console.log(`Current Count: ${count}`);
	}

	function reset() {
		count = 0;
		console.log(`Reset Count`);
	}

	return { add, getCount, reset };
}

const counter = createAdvancedCounter();
counter.getCount();
counter.add();
counter.add();
counter.add();
counter.reset();
counter.getCount();

// Tugas: Buat fungsi yang dapat dirantai (chainable)

function createChainable(initialValue) {
	let value = initialValue;

	function add(num) {
		value += num;
		return this;
	}

	function subtract(num) {
		value -= num;
		return this;
	}

	function getValue() {
		console.log(`Value: ${value}`);
		return value;
	}

	return { add, subtract, getValue };
}

const chain = createChainable(10);
chain.add(5).subtract(3).getValue();

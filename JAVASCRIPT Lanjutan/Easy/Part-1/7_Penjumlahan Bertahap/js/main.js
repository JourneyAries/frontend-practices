// Tugas: Buat fungsi yang menjumlahkan angka secara bertahap

function createNumber() {
	let start = 0;

	function plus(num) {
		start += num;
		console.log(`${start} + ${num}`);
	}

	function minus(num) {
		start -= num;
		console.log(`${start} - ${num}`);
	}

	function getNums() {
		console.log(`current: ${start}`);
	}

	return { plus, minus, getNums };
}

const number1 = createNumber();
number1.getNums();
number1.getNums();

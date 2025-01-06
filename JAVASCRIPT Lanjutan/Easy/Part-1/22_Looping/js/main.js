// Tugas: Gunakan closure untuk membuat fungsi yang mengulang pesan

function createRepeater(message, times) {
	return function () {
		for (let i = 0; i < times; i++) {
			console.log(message);
		}
	};
}

const repeatHello = createRepeater('Hello', 3);
repeatHello();

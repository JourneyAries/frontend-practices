// Tugas: Buat closure untuk menghitung jumlah kata dalam string

function createWordCounter() {
	return function (sentence) {
		const wordCount = sentence.split(' ').length;
		console.log(`Word count: ${wordCount}`);
	};
}

const wordCounter = createWordCounter();
wordCounter('This is a simple sentence');

// Tugas: Gunakan callback untuk mencetak elemen array satu per satu.

function printElement(element) {
	console.log(element);
}

function iterateArray(arr, callback) {
	arr.forEach(callback);
}

iterateArray([1, 2, 3], printElement);

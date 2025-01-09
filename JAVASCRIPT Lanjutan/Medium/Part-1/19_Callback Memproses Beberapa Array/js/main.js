// Tugas: Gunakan callback untuk memproses beberapa elemen dalam array.

function processItems(items, callback) {
	const results = [];
	items.forEach((item) => results.push(callback(item)));
	return results;
}

const processedItems = processItems([1, 2, 3, 4], (item) => item * 2);
console.log(processedItems);

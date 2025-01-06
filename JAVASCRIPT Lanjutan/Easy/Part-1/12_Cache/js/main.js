// Tugas: Gunakan closure untuk menyimpan hasil perhitungan sebelumnya

function createCache() {
	const cache = {};

	return function (key, value) {
		if (value !== undefined) {
			cache[key] = value;
			console.log(`Cache updated: ${key} = ${value}`);
		} else {
			console.log(`Cache value for ${key} : ${cache[key]}}`);
		}
	};
}

const cache = createCache();
cache('name', 'John');
cache('name');

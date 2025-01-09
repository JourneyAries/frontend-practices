// Tugas: Gunakan dua callback untuk menangani dua input asinkron secara paralel.

function fetchData1(callback) {
	setTimeout(() => {
		callback('Data 1');
	}, 500);
}

function fetchData2(callback) {
	setTimeout(() => {
		callback('Data 2');
	}, 700);
}

fetchData1((data1) => {
	fetchData2((data2) => {
		console.log(data1, data2);
	});
});

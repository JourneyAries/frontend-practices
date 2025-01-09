// Tugas: Gunakan callback untuk menangani error jika angka negatif ditemukan.

function processNumber(num, callback, errorCallBack) {
	if (num > 0) {
		callback(num);
	} else {
		errorCallBack('Angka Negatif Tidak Boleh');
	}
}

processNumber(-1, console.log, console.error);

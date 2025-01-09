// Tugas: Gunakan `setTimeout` untuk menjalankan callback setelah 2 detik.

function delayedMessage(callback) {
	setTimeout(() => {
		callback('pesan ini terlambat');
	}, 2000);
}

delayedMessage(console.log);

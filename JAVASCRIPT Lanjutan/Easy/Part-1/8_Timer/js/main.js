// Tugas: Gunakan closure untuk membuat timer
// Fungsi createTimer tidak menerima parameter
// Di dalam createTimer:
// - Simpan waktu saat ini (dalam milidetik) ke variabel privat start

// Kembalikan fungsi anonim (closure):
// - Hitung waktu yang telah berlalu dengan formula: (waktu saat ini - start) / 1000
// - Cetak pesan: "Elapsed time: [elapsed] seconds", di mana elapsed dibulatkan ke 2 angka desimal

// Contoh penggunaan:
// - Panggil createTimer untuk membuat timer baru
// - Simpan fungsi yang dikembalikan dalam variabel timer
// - Gunakan setTimeout untuk memanggil timer setelah 2000 ms (2 detik)
// - Timer akan mencetak waktu yang telah berlalu sejak createTimer dipanggil

function createTimer() {
	const start = Date.now();
	return function () {
		const elapsed = (Date.now() - start) / 1000;
		console.log(`Elapsed time: ${elapsed.toFixed(2)} seconds`);
	};
}

const timer = createTimer();
setTimeout(timer, 2000);

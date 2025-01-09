// Tugas: Gunakan `setTimeout` untuk memanipulasi waktu tunggu dan callback.

function waitFor(seconds, callback) {
	setTimeout(() => {
		callback(`waited for ${seconds} seconds`);
	}, seconds * 1000);
}

waitFor(2, console.log);

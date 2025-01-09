// Tugas: Buat fungsi delay generik yang menerima waktu dan callback.

function delay(time, callback) {
	setTimeout(callback, time);
}

delay(1000, () => console.log('1 second delay'));

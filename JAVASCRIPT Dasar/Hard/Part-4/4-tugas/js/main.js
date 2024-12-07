// Counter Interaktif
// Pseudocode lengkap:
// Tangkap elemen dengan ID counter, increment, dan decrement.
// Tambahkan event listener pada tombol "Tambah" untuk:
// Ambil nilai saat ini dari counter (gunakan parseInt).
// Tambahkan 1 dan set kembali ke elemen.
// Tambahkan event listener pada tombol "Kurangi" untuk:
// Ambil nilai saat ini dari counter.
// Kurangi 1 dan set kembali ke elemen.
// Cara berpikir / hack atau tips lengkap:
// Gunakan innerText atau textContent untuk membaca dan menulis ke elemen teks.
// Gunakan fungsi parseInt untuk mengubah teks menjadi angka sebelum melakukan operasi aritmatika.

const eleCounter = document.getElementById('counter');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');

//increment
btnIncrement.addEventListener('click', () => {
	let numCounter = parseInt(eleCounter.textContent);
	//limitation
	if (numCounter < 10) {
		numCounter++;
		eleCounter.textContent = numCounter;
	}
});

//decrement
btnDecrement.addEventListener('click', () => {
	let numCounter = parseInt(eleCounter.textContent);
	//limitation
	if (numCounter > 0) {
		numCounter--;
		eleCounter.textContent = numCounter;
	}
});

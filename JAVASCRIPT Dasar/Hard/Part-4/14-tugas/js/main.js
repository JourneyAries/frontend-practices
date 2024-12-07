// Judul Tugas: Membuat Kalkulator Sederhana

// Pseudocode Lengkap:
// Buat dua input teks untuk memasukkan angka (misalnya input1 dan input2).
// Buat beberapa tombol operasi matematika (seperti +, -, *, /).
// Buat elemen untuk menampilkan hasil perhitungan.
// Ketika tombol operasi diklik, ambil nilai dari kedua input, lakukan perhitungan, dan tampilkan hasilnya di elemen hasil.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan parseFloat() untuk mengubah input pengguna menjadi angka.
// Pastikan kamu menangani event klik pada masing-masing tombol operasi.
// Gunakan innerHTML atau textContent untuk menampilkan hasil perhitungan.

const calculator = document.querySelector('.calculator');
const result = document.getElementById('result');

calculator.addEventListener('click', (e) => {
	const eleInput1 = document.getElementById('input1');
	const eleInput2 = document.getElementById('input2');
	const input1 = parseFloat(eleInput1.value);
	const input2 = parseFloat(eleInput2.value);

	if (isNaN(input1) || isNaN(input2)) {
		result.textContent = 'Error: Input tidak valid!';
		result.style.color = 'red';
		return;
	}

	let calculationResult;

	switch (e.target.id) {
		case 'add':
			calculationResult = input1 + input2;
			break;
		case 'subtract':
			calculationResult = input1 - input2;
			break;
		case 'multiply':
			calculationResult = input1 * input2;
			break;
		case 'divide':
			calculationResult = input2 !== 0 ? input / 2 : 'Error: Pembagian dengan nol!';
			break;
	}

	// Tampilkan hasil perhitungan
	if (calculationResult === 'Error: Pembagian dengan nol!') {
		result.style.color = 'red';
		result.textContent = calculationResult;
	} else {
		result.style.color = 'black';
		result.textContent = `Hasil: ${calculationResult}`;
	}

	// Kosongkan input field
	eleInput1.value = '';
	eleInput2.value = '';
});

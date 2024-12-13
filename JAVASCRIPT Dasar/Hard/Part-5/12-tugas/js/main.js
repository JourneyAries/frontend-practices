// project #: 4
// judul project: Kalkulator BMI
// list fitur utama:
// 1. Input berat badan dan tinggi badan.
// 2. Menghitung BMI berdasarkan input pengguna.
// 3. Menampilkan kategori BMI (misalnya: Kurus, Normal, Obesitas).
// 4. Menggunakan tombol untuk menghitung BMI.
// list main requirement:
// 1. Input berat badan dalam kilogram.
// 2. Input tinggi badan dalam meter.
// 3. Menampilkan hasil BMI dan kategori.

const bmiContainer = document.querySelector('.bmi-container');
const calculateBmi = document.getElementById('calculate-bmi');
const bmiResult = document.getElementById('bmi-result');

const inputBerat = document.getElementById('weight');
const inputTinggi = document.getElementById('height');

const processBmi = (berat, tinggi) => {
	const tinggiMeter = tinggi / 100;
	return berat / (tinggiMeter * tinggiMeter);
};

calculateBmi.addEventListener('click', () => {
	const berat = parseFloat(inputBerat.value);
	const tinggiCm = parseFloat(inputTinggi.value);

	//validasi biar ga muncul NaN
	if (isNaN(berat) || isNaN(tinggiCm) || berat <= 0 || tinggiCm <= 0) {
		bmiResult.textContent = 'Tolong masukkan nilai yang valid untuk berat badan dan tinggi badan.';
		return;
	}

	const resultNum = processBmi(berat, tinggiCm);
	let resultText = '';

	if (resultNum < 18.5) {
		resultText = 'Kurus';
	} else if (18.5 <= resultNum < 24.9) {
		resultText = 'Normal';
	} else if (25 <= resultNum <= 29.9) {
		resultText = 'Overweight';
	} else if (resultNum >= 30) {
		resultText = 'Obesitas';
  }
  
	bmiResult.textContent = `BMI: ${resultText} (${resultNum.toFixed(2)})`;
});

bmiContainer.addEventListener('input', () => {
	if (inputBerat.value !== '' || inputTinggi.value !== '') {
		bmiResult.textContent = '';
	}
});

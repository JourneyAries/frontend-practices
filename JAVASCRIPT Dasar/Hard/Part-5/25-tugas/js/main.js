//judul project: Kalkulator BMI
//list fitur utama:
// 1. Menghitung BMI (Body Mass Index) berdasarkan berat badan dan tinggi badan.
// 2. Menampilkan kategori BMI (kurus, normal, gemuk).
// 3. Menambahkan penjelasan tentang kategori BMI.
//list main requirement:
// 1. Input untuk memasukkan berat badan dan tinggi badan.
// 2. Menampilkan hasil perhitungan BMI secara dinamis.
// 3. Menampilkan kategori BMI sesuai hasil perhitungan.

const bmiCalculator = document.querySelector('.bmi-calculator');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const btnCalculate = document.getElementById('calculate-btn');
const resultBmiDisplay = document.getElementById('bmi-result');
const categoryBmiDisplay = document.getElementById('bmi-category');

btnCalculate.addEventListener('click', () => {
	const weight = weightInput.value;
	const height = heightInput.value;

	const calculationBmi = weight / ((height / 100) * (height / 100));
	resultBmiDisplay.textContent = calculationBmi.toFixed(2);

	let categoryBmi = '';
	if (calculationBmi < 18.5) {
		categoryBmi = 'Kurang Berat Badan';
	} else if (calculationBmi <= 24.9) {
		categoryBmi = 'Normal';
	} else if (calculationBmi <= 29.9) {
		categoryBmi = 'Kelebihan Berat Badan';
	} else {
		categoryBmi = 'Obesitas';
	}
	categoryBmiDisplay.textContent = categoryBmi;
});

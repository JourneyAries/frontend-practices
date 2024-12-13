// project #: 1
// judul project: Kalkulator Sederhana
// list fitur utama:
// 1. Menginput dua angka.
// 2. Memilih operasi matematika sederhana (tambah, kurang, kali, bagi).
// 3. Menampilkan hasil perhitungan.
// list main requirement:
// 1. Input untuk angka pertama dan angka kedua.
// 2. Dropdown untuk memilih operasi.
// 3. Tombol untuk menghitung hasil.

const Input1 = document.getElementById('num1');
const Input2 = document.getElementById('num2');
const btnCalculate = document.getElementById('calculate');
const resultDisplay = document.getElementById('result');
const operation = document.getElementById('operation');
const historyList = document.getElementById('history-list');
let historyArray = [];

btnCalculate.addEventListener('click', () => {
	const value1 = parseFloat(Input1.value);
	const value2 = parseFloat(Input2.value);
	const selectedOperation = operation.value;

	//validasi input angka
	if (isNaN(value1) || isNaN(value2)) {
		resultDisplay.textContent = 'Masukan angka yang valid';
		return;
	}

	let result;
	let operationSymbol;

	if (selectedOperation === 'add') {
		result = value1 + value2;
		operationSymbol = '+';
	} else if (selectedOperation === 'subtract') {
		result = value1 - value2;
		operationSymbol = '-';
	} else if (selectedOperation === 'multiply') {
		result = value1 * value2;
		operationSymbol = '*';
	} else if (selectedOperation === 'divide') {
		if (value1 === 0 || value2 === 0) {
			resultDisplay.textContent = 'Error: tidak boleh 0 dalam pembagian';
			return;
		}
		result = value1 / value2;
		operationSymbol = '/';
	}

	resultDisplay.textContent = `Hasil: ${result}`;

	//masukan ke history
	historyArray.push({
		value1: value1,
		value2: value2,
		operation: operationSymbol,
		result: result,
	});

	//reset
	Input1.value = '';
	Input2.value = '';
	operation.value = 'add';

	//render ulang riwayat
	renderHistory();
});

//fungsi menampilkan riwayat
function renderHistory() {
	historyList.innerHTML = '';

	historyArray.forEach((entry) => {
		const historyItem = document.createElement('li');
		historyItem.textContent = `${entry.value1} ${entry.operation} ${entry.value2} = ${entry.result}`;
		historyList.appendChild(historyItem);
	});
}

historyList.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		e.target.remove();
	}
});

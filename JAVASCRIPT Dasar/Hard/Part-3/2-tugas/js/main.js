// 1. Kalkulator Sederhana
// Pseudocode:
// Ambil nilai dari kedua input (num1, num2) saat tombol Calculate diklik.
// Hitung penjumlahan dari kedua nilai tersebut.
// Tampilkan hasil di dalam elemen <p> dengan ID result.
// Upgrade (v2, v3):
// v2: Tambahkan operasi matematika lain seperti pengurangan, perkalian, dan pembagian.
// v3: Gunakan dropdown untuk memilih operasi matematika.

const calculator = document.getElementById('calculator');
const btnTambah = document.getElementById('tambah');
const btnKurang = document.getElementById('kurang');
const btnKali = document.getElementById('kali');
const btnBagi = document.getElementById('bagi');
const result = document.getElementById('result');

const calculate = (operation) => {
	const input1 = parseInt(document.getElementById('num1').value);
	const input2 = parseInt(document.getElementById('num2').value);
	let total;

	if (isNaN(input1) || isNaN(input2)) {
		result.textContent = 'Masukan angka yang valid';
		return;
	}

	switch (operation) {
		case 'tambah':
			total = input1 + input2;
			break;
		case 'kurang':
			total = input1 - input2;
			break;
		case 'kali':
			total = input1 * input2;
			break;
		case 'bagi':
			total = input1 / input2;
			break;
		default:
			total = 'Operasi tidak dikenali';
	}

	result.textContent = `result: ${total}`;
};

btnTambah.addEventListener('click', () => calculate('tambah'));
btnKurang.addEventListener('click', () => calculate('kurang'));
btnBagi.addEventListener('click', () => calculate('kali'));
btnKali.addEventListener('click', () => calculate('bagi'));

// 1. Kalkulator Sederhana
// Pseudocode:
// Ambil nilai dari kedua input (num1, num2) saat tombol Calculate diklik.
// Hitung penjumlahan dari kedua nilai tersebut.
// Tampilkan hasil di dalam elemen <p> dengan ID result.
// Upgrade (v2, v3):
// v2: Tambahkan operasi matematika lain seperti pengurangan, perkalian, dan pembagian.
// v3: Gunakan dropdown untuk memilih operasi matematika.

const calculator = document.getElementById('calculator');

// const operations = [
// 	{ id: 'tambah', label: 'Tambah', action: 'tambah' },
// 	{ id: 'kurang', label: 'Kurang', action: 'kurang' },
// 	{ id: 'kali', label: 'Kali', action: 'kali' },
// 	{ id: 'bagi', label: 'Bagi', action: 'bagi' },
// ];

// operations.forEach(({ id, label, action }) => {
//   const button = document.createElement('button');
//   button.id = id;
//   button.textContent = label;
//   calculator.appendChild(button);
// })

const btnTambah = document.getElementById('tambah');
const btnKurang = document.getElementById('kurang');
const btnKali = document.getElementById('kali');
const btnBagi = document.getElementById('bagi');
const result = document.getElementById('result');

const getInputs = () => {
	const input1 = parseFloat(document.getElementById('num1').value);
	const input2 = parseFloat(document.getElementById('num2').value);
	return { input1, input2 };
};

const calculate = (operation) => {
	const { input1, input2 } = getInputs();
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
			if (input2 === 0) {
				total = 'Tidak bisa dibagi dengan 0';
			} else {
				total = input1 / input2;
			}
			break;
		default:
			total = 'Operasi tidak dikenali';
	}
	result.textContent = `Result: ${total}`;
};

btnTambah.addEventListener('click', () => calculate('tambah'));
btnKurang.addEventListener('click', () => calculate('kurang'));
btnKali.addEventListener('click', () => calculate('kali'));
btnBagi.addEventListener('click', () => calculate('bagi'));

// Tugas 14: Tambahkan Elemen Baru
// Soal: Tambahkan elemen < li > baru ke dalam < ul > setiap kali tombol Add diklik.
// Hint: Gunakan createElement dan appendChild.

const dynamicList = document.getElementById('dynamicList');
const addBtn = document.getElementById('addBtn');
let counter = 1;

addBtn.addEventListener('click', () => {
	const list = document.createElement('li');
	list.textContent = ` ${counter}. List Baru`;
	dynamicList.appendChild(list);
	counter++;
});

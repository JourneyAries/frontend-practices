// Tugas 15: Tambah dan Hapus Elemen
// Soal: Tambahkan elemen baru dengan tombol Add, lalu hapus semua elemen dengan tombol Clear.
// Hint: Gunakan loop untuk menghapus semua elemen dengan .removeChild().

const dynamicList = document.getElementById('dynamicList');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
let counter = 1;

addBtn.addEventListener('click', () => {
	const list = document.createElement('li');
	list.textContent = `${counter}. List Baru`;
	dynamicList.appendChild(list);
	counter++;
});

clearBtn.addEventListener('click', () => {
	while (dynamicList.firstChild) {
		dynamicList.removeChild(dynamicList.firstChild);
	}
	counter = 1;
});

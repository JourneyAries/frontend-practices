// Soal 13: Menambah Elemen Anak
// Soal: Tambahkan elemen <li> baru dengan teks "New Item" ke dalam daftar <ul> saat tombol diklik.
// Hint: Gunakan createElement() dan appendChild().

const list = document.getElementById('list');
const addItem = document.getElementById('addItem');

addItem.addEventListener('click', () => {
	const newList = document.createElement('li');
	newList.textContent = 'Item Baru';
	list.appendChild(newList);
});

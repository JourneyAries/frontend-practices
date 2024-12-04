// Soal 14: Menghapus Elemen
// Soal: Hapus elemen terakhir dari daftar <ul> saat tombol diklik.
// Hint: Gunakan lastElementChild dan removeChild().

const list = document.getElementById('list');
const removeItemBtn = document.getElementById('removeItem');

removeItemBtn.addEventListener('click', () => {
  const lastItem = list.lastElementChild;
	if (lastItem) {
		list.removeChild(lastItem);
	}
});

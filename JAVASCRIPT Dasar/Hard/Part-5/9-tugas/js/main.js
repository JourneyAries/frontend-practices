// Tugas 10: Menampilkan Total Harga Semua Barang
// Pseudocode lengkap:
// 1. Tujuan:
//    Tambahkan fitur untuk menghitung total harga barang yang ada dalam daftar.
// 2. Langkah-langkah kecil:
//    a. Gunakan kode dari Tugas 9 sebagai dasar.
//    b. Ketika barang ditambahkan:
//       - Ambil harga barang dan tambahkan ke total harga.
//       - Tampilkan total harga di bagian bawah daftar barang.
//    c. Update total harga setiap kali barang ditambahkan.
// Cara berpikir / hack atau tips lengkap:
// - Gunakan variabel untuk menyimpan total harga.
// - Tambahkan harga barang yang baru ke total harga setiap kali barang ditambahkan.

const container = document.querySelector('.container');
const itemName = document.getElementById('itemName');
const itemPrice = document.getElementById('itemPrice');
const itemsList = document.getElementById('itemList');
const totalPriceElement = document.getElementById('totalPrice');

let totalPrice = 0;

container.addEventListener('click', (e) => {
	const nameValue = itemName.value;
	const priceValue = parseFloat(itemPrice.value);

	if (e.target.id === 'addButton' && nameValue && !isNaN(priceValue)) {
		const list = document.createElement('li');
		list.classList.add('itemList');
		list.innerHTML = `${nameValue} - Rp${priceValue.toFixed(2)}`;
		itemsList.appendChild(list);

		totalPrice += priceValue;
		totalPriceElement.textContent = `Total Harga: Rp${totalPrice.toFixed(2)}`;

		itemName.value = '';
		itemPrice.value = '';
	}

	const prices = document;
});

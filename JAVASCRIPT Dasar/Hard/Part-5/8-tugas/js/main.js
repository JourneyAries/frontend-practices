// Tugas 9: Menambahkan Harga Barang ke Daftar
// Pseudocode lengkap:
// 1. Tujuan:
//    Tambahkan fitur untuk memasukkan harga barang saat menambahkan barang ke daftar.
// 2. Langkah-langkah kecil:
//    a. Buat elemen input untuk nama barang dan harga barang.
//    b. Ketika tombol "Tambah" diklik:
//       - Ambil nilai dari kedua input (nama dan harga).
//       - Tampilkan nama barang dan harga dalam elemen `<li>`.
//    c. Kosongkan kedua input setelah barang ditambahkan.
// Cara berpikir / hack atau tips lengkap:
// - Gunakan dua input: satu untuk nama barang dan satu untuk harga.
// - Gunakan `createElement` untuk membuat elemen `<li>` dengan dua informasi (nama barang dan harga).
// - Gunakan `appendChild` untuk menambahkan item ke dalam daftar.

const container = document.querySelector('.container');
const itemName = document.getElementById('itemName');
const itemPrice = document.getElementById('itemPrice');
const itemsList = document.getElementById('itemList');

container.addEventListener('click', (e) => {
  const nameValue = itemName.value;
  const priceValue = itemPrice.value;

  if (e.target.id === 'addButton') {
    const list = document.createElement('li');
    list.classList.add('itemList');
    list.innerHTML = `
    <li>
      <span>${nameValue}</span> - <span>${priceValue}</span>
    </li>
    `;
    itemsList.appendChild(list);
    
    itemName.value = '';
    itemPrice.value = '';
  }
})
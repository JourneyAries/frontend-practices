//7. Jumlah Total Pembelian
//Buat fungsi calculateTotal(items) yang menerima array items yang berisi objek dengan properti name dan price, lalu mengembalikan total harga semua item.

function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

console.log(calculateTotal([{ name: "apple", price: 3 }, { name: "banana", price: 2 }]));
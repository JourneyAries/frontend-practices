// Studi Kasus 2: Sistem Inventaris Barang (Medium)
// Soal 1: Buat fungsi untuk membuat objek barang dengan properti name, quantity, dan price.

function createItem(name, quantity, price) {
  return {
    name: name,
    quantity: quantity,
    price: price
  }
}

console.log(createItem('laptop', 10, 1500));

// Soal 2: Tambahkan properti category ke objek barang.
function addCategoryToItem(item, category) {
  item.category = category;
  return item;
}

console.log(addCategoryToItem({ name: "Laptop", quantity: 10, price: 1500 }, "Electronics"));

// Soal 3: Buat fungsi untuk menghitung total harga stok barang (quantity * price).
function calculateTotalStockValue(item) {
  return item.quantity * item.price;
}

console.log(calculateTotalStockValue({ name: "Laptop", quantity: 10, price: 1500 })
);

// Soal 4: Buat fungsi untuk memperbarui jumlah stok barang.
function updateItemQuantity(item, newQuantity) {
  item.quantity = newQuantity;
  return item;
}

console.log(updateItemQuantity({ name: "Laptop", quantity: 10, price: 1500 }, 15)
);

// Soal 5: Buat fungsi untuk memfilter barang dengan harga di atas nilai tertentu.
function filterItemsByPrice(items, minPrice) {
  return items.filter(item => item.price > minPrice);
}

const filteredItems = filterItemsByPrice([
  { name: "Laptop", quantity: 10, price: 1500 },
  { name: "Mouse", quantity: 50, price: 20 }
], 500);

console.log(filteredItems);
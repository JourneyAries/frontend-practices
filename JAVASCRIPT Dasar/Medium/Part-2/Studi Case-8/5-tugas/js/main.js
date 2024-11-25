// Studi Kasus 5: Menggunakan Object.seal() untuk Menangani Pembaruan Properti dengan Fungsi (Level 5 - Very Hard)
// Deskripsi: Gunakan Object.seal() pada objek yang dikelola oleh fungsi untuk menangani pembaruan data tanpa dapat menambah properti baru.

function sealObjectAndUpdateOrder(order, quantity, price) {
  // Membekukan objek order agar tidak dapat menambah properti baru
  Object.seal(order);

  // Memperbarui properti yang ada pada objek order
  updateOrder(order, quantity, price);

  // Mencoba menambah properti baru setelah objek di-seal
  order.shipping = "Express"; // Tidak bisa menambah properti baru

  console.log(order); // Output: { product: "Laptop", quantity: 2, price: 900 }
}

function updateOrder(order, quantity, price) {
  // Memperbarui properti quantity jika ada
  if (order.quantity !== undefined) {
    order.quantity = quantity;
  }

  // Memperbarui properti price jika ada
  if (order.price !== undefined) {
    order.price = price;
  }
}

// Objek order yang berisi informasi produk, jumlah, dan harga
const order = { product: "Laptop", quantity: 1, price: 1000 };

// Menggunakan fungsi sealObjectAndUpdateOrder untuk memperbarui order
sealObjectAndUpdateOrder(order, 2, 900);

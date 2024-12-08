// Judul Tugas: Daftar Belanja dengan Pilihan Jumlah

// Pseudocode Lengkap:
// Buat daftar produk dengan nama dan harga.
// Setiap produk memiliki dropdown untuk memilih jumlah yang ingin dibeli.
// Buat tombol "Tambah ke Keranjang" untuk menambah produk beserta jumlahnya ke keranjang belanja.
// Tampilkan daftar produk di keranjang bersama dengan jumlah dan total harga.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan createElement() untuk menambahkan produk ke keranjang.
// Gunakan dropdown <select> untuk memilih jumlah.
// Hitung total harga dengan mengalikan harga produk dengan jumlah yang dipilih.

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');
let cart = [];

// Event Listener untuk menangani tombol "Tambah ke Keranjang"
productList.addEventListener('click', (e) => {
	if (e.target.classList.contains('add-to-cart')) {
		const productItem = e.target.closest('.product-item');
		const productName = productItem.firstChild.textContent.trim().split(' - ')[0];
		const productPrice = parseFloat(productItem.firstChild.textContent.trim().split(' - ')[1].replace('$', ''));
		const quantity = parseInt(productItem.querySelector('.quantity').value);

		// Tambahkan produk ke keranjang
		addToCart(productName, productPrice, quantity);
		updateCartDisplay();
	}
});

// Fungsi untuk menambah produk ke keranjang
function addToCart(name, price, quantity) {
	// Periksa apakah produk sudah ada di keranjang
	const existingItem = cart.find((item) => item.name === name);

	if (existingItem) {
		// Jika sudah ada, tambahkan jumlahnya
		existingItem.quantity += quantity;
	} else {
		// Jika belum, tambahkan produk baru ke array keranjang
		cart.push({ name, price, quantity });
	}
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCartDisplay() {
	// Kosongkan daftar keranjang
	cartItems.innerHTML = '';

	// Tampilkan setiap item di keranjang
	cart.forEach((item) => {
		const li = document.createElement('li');
		li.classList.add('cart-item');
		li.innerHTML = `
      ${item.name} - $${item.price} x ${item.quantity} 
      <span>= $${item.price * item.quantity}</span>
    `;
		cartItems.appendChild(li);
	});

	// Hitung total harga
	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
	totalDisplay.textContent = `Total: $${total}`;
}

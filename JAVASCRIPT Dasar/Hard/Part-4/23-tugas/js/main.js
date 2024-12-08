// Judul Tugas: Penghitungan Jumlah Pembelian Produk

// Pseudocode Lengkap:
// Buat daftar produk yang berisi nama produk dan harga.
// Setiap produk memiliki tombol "Beli" untuk menambahkannya ke keranjang.
// Ketika tombol "Beli" diklik, produk akan ditambahkan ke dalam keranjang.
// Tampilkan total harga produk di keranjang setelah setiap pembelian.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan event listener pada setiap tombol "Beli" untuk menambah produk ke keranjang.
// Gunakan array untuk menyimpan produk yang ada di keranjang.
// Hitung total harga setiap kali produk ditambahkan dengan reduce() atau loop biasa.

const listProduct = document.getElementById('product-list');
const itemsCart = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');
let cart = [];

listProduct.addEventListener('click', (e) => {
	if (e.target.className === 'buy-btn') {
		const productItem = e.target.closest('.product-item');
		const productName = productItem.textContent.trim().split(' - ')[0];
		const productPrice = parseFloat(productItem.getAttribute('data-price'));

		cart.push({ name: productName, price: productPrice });
		updateCartDisplay();
	}
});

function updateCartDisplay() {
	itemsCart.innerHTML = '';

	cart.forEach((item) => {
		const li = document.createElement('li');
		li.classList.add('cart-item');
		li.textContent = `${item.name} - $${item.price}`;
		itemsCart.appendChild(li);
	});

	const total = cart.reduce((sum, item) => sum + item.price, 0);
	totalDisplay.textContent = `Total: $${total}`;
}

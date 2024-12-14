//judul project: Sistem Pemesanan Restoran
//list fitur utama:
// 1. Menambahkan item menu ke dalam keranjang.
// 2. Mengubah jumlah item yang dipesan di keranjang.
// 3. Menampilkan total harga pemesanan.
// 4. Menghapus item dari keranjang.
//list main requirement:
// 1. Daftar menu dengan pilihan untuk menambah ke keranjang.
// 2. Keranjang yang menampilkan item yang dipilih.
// 3. Total harga yang dihitung secara otomatis.
// 4. Tombol untuk menghapus item dari keranjang.

const menuItems = [
	{ name: 'Pizza', price: 2000 },
	{ name: 'Pasta', price: 4000 },
	{ name: 'Burger', price: 6000 },
];

const cartList = document.getElementById('cart-list');
const totalPriceDisplay = document.getElementById('total-price');
let cart = [];

//fungsi untuk menambahkan ke keranjang
function addToCart(itemName) {
	const item = menuItems.find((menuItem) => menuItem.name === itemName);
	//jika item sudah ada dalam keranjang, tingkatkan jumlahnya
	const existingItem = cart.find((cartItem) => cartItem.name === itemName);
	if (existingItem) {
		existingItem.quantity++;
	} else {
		cart.push({ name: itemName, price: item.price, quantity: 1 });
	}

	updateCartDisplay();
}

//event untuk menambahkan ke keranjang
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
	button.addEventListener('click', () => {
		//ambil nama dari menu berdasarkan index
		const itemName = menuItems[index].name;
		addToCart(itemName);
	});
});

//fungsi untuk memperbaharui tampilan keranjang
function updateCartDisplay() {
	cartList.innerHTML = '';

	cart.forEach((item) => {
		const cartItemElement = document.createElement('div');
		cartItemElement.classList.add('cart-item');

		const itemElement = document.createElement('span');
		itemElement.textContent = `${item.name} (${item.quantity})`;
		cartItemElement.appendChild(itemElement);

		const removeButton = document.createElement('button');
		removeButton.textContent = 'hapus';
		removeButton.addEventListener('click', () => removeFromCart(item.name));
		cartItemElement.appendChild(removeButton);

		cartList.appendChild(cartItemElement);
	});

	updateTotalPrice();
}

//fungsi untuk menghapus item dari keranjang
function removeFromCart(itemName) {
	cart = cart.filter((cartItem) => cartItem.name !== itemName);
	updateCartDisplay();
}

//fungsi untuk menghitung dan menampilkan total harga
function updateTotalPrice() {
	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
	totalPriceDisplay.textContent = `Total: Rp${total.toLocaleString()}`;
}

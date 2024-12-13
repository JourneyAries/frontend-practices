// project #: 5
// judul project: Sistem Pemesanan Makanan (Food Order System)
// list fitur utama:
// 1. Menambahkan makanan ke dalam keranjang.
// 2. Menampilkan daftar makanan yang ada di keranjang.
// 3. Menghapus makanan dari keranjang.
// 4. Menampilkan total harga makanan yang dipesan.
// list main requirement:
// 1. Input untuk memilih makanan dan jumlah pesanan.
// 2. Tombol untuk menambah makanan ke keranjang.
// 3. Menampilkan daftar makanan dalam keranjang dan total harga.

const nameInput = document.getElementById('food-name');
const quantityInput = document.getElementById('food-quantity');
const btnAddFood = document.getElementById('add-food');
const orderList = document.getElementById('order-list');
const totalPrice = document.getElementById('total-price');
let order = [];

btnAddFood.addEventListener('click', () => {
	const name = nameInput.value.trim();
	const quantity = parseInt(quantityInput.value);

	if (name === '' || isNaN(quantity) || quantity < 1) {
		alert('Masukan nama dan jumlah yang valid');
		return;
	}

	//object array
	const foodItem = {
		name: name,
		quantity: quantity,
		price: 10000,
	};
	order.push(foodItem);

	//reset input field
	nameInput.value = '';
	quantityInput.value = '';
	updateOrderDisplay();
});

function updateOrderDisplay() {
	orderList.innerHTML = '';
	let total = 0;

	order.forEach((item, index) => {
		const orderItem = document.createElement('div');
		orderItem.classList.add('order-item');
		orderItem.innerHTML = `
      ${item.name} (x${item.quantity}) - Rp ${item.price * item.quantity}
      <button class="btnDelete">Hapus</button>
    `;

		const btnDelete = orderItem.querySelector('.btnDelete');
		btnDelete.addEventListener('click', () => {
			order.splice(index, 1);
			updateOrderDisplay();
		});

		orderList.appendChild(orderItem);
		total += item.price * item.quantity;
	});

	totalPrice.textContent = `Total Harga: Rp ${total}`;
}

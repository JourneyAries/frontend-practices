// Studi Kasus 4: Sistem E-commerce - Pengelolaan Keranjang Belanja (Hard)

// Soal 1: Buat fungsi untuk membuat objek produk dengan properti name, price, dan quantity.
let cart = [];

function createProduct(name, price, quantity) {
  return {
    name: name,
    price: price,
    quantity: quantity
  }
}

const product1 = createProduct('T-shirt', 100, 2);
const product2 = createProduct('Jeans', 200, 1);
console.log(product1);

// Soal 2: Buat fungsi untuk menambahkan produk ke dalam keranjang belanja.
function addToCard(cart, product) {
  return cart.push(product);
}

addToCard(cart, product1);
addToCard(cart, product2);
console.log(cart);

// Soal 3: Buat fungsi untuk menghitung total harga keranjang belanja.
function calculateTotal(cart) {
  return cart.reduce((result, product) => {
    result += (product.price * product.quantity);
    return result;
  }, 0);
}

console.log(calculateTotal(cart));

// Soal 4: Buat fungsi untuk menghapus produk dari keranjang belanja berdasarkan nama produk.

function removeProductFromCart(cart, productName) {
  return cart.filter(product => product.name !== productName);
}

//sebelum menghapus cart
console.log(cart);

//sesudah menghapus cart
const newCart = removeProductFromCart(cart, 'T-shirt');

console.log(newCart);

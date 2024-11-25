//Studi Kasus 3: Menghitung Total Harga Barang (Level 3 - Medium)

let Cart = [
  {name: 'Apple', price: 200, quantity: 5},
  {name: 'Banana', price: 100, quantity: 3},
  {name: 'Orange', price: 300, quantity: 4},
]

function calculateTotalPrice(obj) {
  let total = 0;

  for (let item of obj) {
    total += item.price * item.quantity;
  }

  return total;
}

let totalPrice = calculateTotalPrice(Cart);
console.log(totalPrice);
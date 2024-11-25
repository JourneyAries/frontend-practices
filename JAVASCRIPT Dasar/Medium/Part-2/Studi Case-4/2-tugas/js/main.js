// Studi Kasus 2: Menampilkan Nilai dari Array dalam Objek (Level 2 - Easy)

let ShoppingCart = {
  fruit: ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'],
};

function displayFruits(obj) {
  for (let fruit of obj.fruit) {
    console.log(fruit);
  }
};

displayFruits(ShoppingCart);
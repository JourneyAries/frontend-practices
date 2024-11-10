//20. Pembelian dalam Game
//Buat fungsi canBuyItem(points, itemCost) yang mengembalikan true jika pemain memiliki cukup points untuk membeli itemCost, dan false jika tidak.

function canBuyItem(points, itemCost) {
  return points >= itemCost;
}

console.log(canBuyItem(2000, 500));
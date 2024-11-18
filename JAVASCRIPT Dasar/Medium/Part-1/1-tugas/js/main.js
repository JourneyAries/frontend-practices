// 1. Program Hitung Diskon (e-Commerce)
// Buat fungsi calculateDiscount(price, discountPercentage) yang menghitung harga setelah diskon.

// Hint:
// Buat fungsi bernama calculateDiscount.
// Ambil dua argumen: harga awal dan persentase diskon.
// Hitung harga setelah diskon.
// Return harga setelah diskon.
// console.log(calculateDiscount(1000, 20)); // Output: 800

//cara pertama
const calculatedDiscount1 = (price, discountPercentage) => {
  const potonganHarga = (price * discountPercentage) / 100;
  return price - potonganHarga;
}

//cara efektif
const calculatedDiscount2 = (price, discountPercentage) => {
  return price * (1 - discountPercentage / 100);
}


console.log(calculatedDiscount1(1000, 20));
console.log(calculatedDiscount2(1000, 20));
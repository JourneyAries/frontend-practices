//21. Hitung Kelebihan Barang
//Buat fungsi calculateExcess(limit, items) yang menerima jumlah limit dan array items. Fungsi ini mengembalikan jumlah total item yang melebihi limit.

function calculateExcess(limit, items) {
  let totalItems = items.reduce((a, b) => a + b, 0);
  return totalItems - limit;
}

console.log(calculateExcess(10, [2, 3, 6]));
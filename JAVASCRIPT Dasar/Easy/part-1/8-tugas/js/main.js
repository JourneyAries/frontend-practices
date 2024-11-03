// penjumlahan bilangan
function penjumlahanBilangan(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
// [END] penjumlahan bilangan

// hitung harga
function hitungTotalBelanja(harga) { 
  let total = 0;
  for (let i = 0; i < harga.length; i++) {
    total += harga[i];
  }
  return total;
}
// [END] hitung harga

// hitung nilai rata-rata
function hitungRataRata(array) { 
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}
// [END] hitung nilai rata-rata

console.log(penjumlahanBilangan([1,2,3,4]));
console.log(hitungTotalBelanja([10000,20000,15000]));
console.log(hitungRataRata([80,90,100]));
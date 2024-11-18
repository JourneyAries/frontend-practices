//25. Mengonversi Angka ke Format Mata Uang
//Buat fungsi formatCurrency(num) yang mengubah angka menjadi string dalam format mata uang.

function formatCurrency(num) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR'}).format(num);  
}

console.log(formatCurrency(1000000));
// 18. Format Rupiah
// Buat fungsi formatRupiah(amount) untuk memformat angka menjadi format rupiah.

// Hint:
// Gunakan metode string atau regex untuk menambahkan tanda koma setiap 3 digit.
// Tambahkan "Rp" di depan angka.

// console.log(formatRupiah(1234567)); Output: "Rp1.234.567"

//Methode Intl.NumberFormat
function formatRupiah1(amount) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
}

console.log(formatRupiah1(1234567));

//string dan regex
function formatRupiah2(amount) {
  return 'Rp' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

console.log(formatRupiah2(1234567));

//Manual dengan loop
function formatRupiah3(amount) {
  let str = amount.toString();
  let result = '';
  let counter = 0;

  for (let i = str.length - 1; i >= 0; i--){
    counter++;
    result = str[i] + result;
    if (counter % 3 === 0 && i !== 0) {
      result = '.' + result;
    }
  }
  return 'Rp' + result;
}

console.log(formatRupiah3(1234567));

function formatRupiah4(amount) {
  const str = amount.toString().split('').reverse();
  const formatted = str.map((digit, index) => (index % 3 === 0 && index !== 0 ? digit + '.' : digit));
  return 'Rp' + formatted.reverse().join('');
}

console.log(formatRupiah4(1234567));

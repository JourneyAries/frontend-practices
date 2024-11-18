// 7. Simulasi Mesin Kasir
// Buat fungsi calculateChange(total, paid) untuk menghitung kembalian.

// Hint:
// Hitung change = paid - total.
// Jika change < 0, return "Uang tidak cukup".
// Return jumlah kembalian.

// console.log(calculateChange(15000, 20000)); Output: 5000

//tenary
function calculateChange1(total, paid) {
  return paid < total ? 'Uang tidak cukup' : paid - total;
}

//if
function calculateChange2(total, paid) {
  if (paid < total) {
    return 'Uang tidak cukup';
  }
  return paid - total;
}

// tenary 2
function calculateChange3(total, paid) {
  const change = paid - total;
  return change < 0 ? 'Uang tidak cukup' : change;
}

//Math.max
function calculateChange4(total, paid) {
  return Math.max(0, paid - total);
}

//array dalam object
function calculateChange5(total, paid) {
  if (paid < total) {
    return {
      status: 'Uang tidak cukup',
      shortage: total - paid,
    };
  };
  return {
    status: 'Sukses',
    change: paid - total,
  };
}

console.log(calculateChange1(15000, 20000));
console.log(calculateChange2(15000, 20000));
console.log(calculateChange3(15000, 20000));
console.log(calculateChange4(15000, 20000));
console.log(calculateChange5(15000, 20000));
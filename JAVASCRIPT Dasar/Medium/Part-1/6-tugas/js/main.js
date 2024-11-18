// 6. Perhitungan Pajak (Keuangan)
// Buat fungsi calculateTax(income) yang menghitung pajak berdasarkan penghasilan.

// Hint:
// Gunakan aturan pajak:
// ≤50 juta: 5%
// 50-100 juta: 10%
// 100 juta: 20 %.

// console.log(calculateTax(60000000)); Output: 6000000

//if else
function calculateTax1(income) {
  if (income >= 0 && income <= 49000000) {
    return (income * 5) / 100;
  } else if (income >= 50000000 && income <= 99999999) {
    return (income * 10) / 100;
  } else {
    return (income * 20) / 100;
  }
}

//switch
function calculateTax2(income) {
  switch (true) {
    case (income >= 0 && income <= 49000000):
      return (income * 5) / 100;
    case (income >= 50000000 && income <= 99999999):
      return (income * 10) / 100;
    default :
      return (income * 20) / 100;
  }
}

//object dan find
function calculateTax3(income) {
  const taxBrackets = [
    { max: 50000000, off: 5 },
    { max: 100000000, off: 10 },
    { max: Infinity, off: 20 }
  ];

  const bracket = taxBrackets.find(off => income <= off.max);
  return (income * bracket.off) / 100;
}

console.log(calculateTax1(60000000));
console.log(calculateTax2(60000000));
console.log(calculateTax3(60000000));
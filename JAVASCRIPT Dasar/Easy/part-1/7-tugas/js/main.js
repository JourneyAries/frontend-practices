// positif / negatif
function isPositif(number) {
  if (number >= 1) {
    return "Positif";
  } else if (number <= -1) {
    return "Negatif";
  } else { 
    return "Jangan masukan angka 0";
  }
}
// [END] positif / negatif

// genap / ganjil
function isGenap(number) {
  if (number % 2 == 0) {
    return "Genap";
  } else { 
    return "Ganjil";
  }
}
// [END] genap / ganjil

console.log(isPositif(-2));
console.log(isGenap(-2));
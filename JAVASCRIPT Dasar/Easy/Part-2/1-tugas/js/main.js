//1. Periksa Bilangan Negatif atau Positif
//Fungsi: isPositiveOrNegative(num)
//Parameter: num (integer)
//Hint: Gunakan kondisi if untuk cek apakah num lebih besar atau lebih kecil dari 0.
//Contoh Pemanggilan: isPositiveOrNegative(-5) // "negatif"

//cara pertama
const isPositiveOrNegative1 = num => {
  if (num < 0) return "Negative";
  if (num > 0) return "Positive";
  return "Zero";
}

//cara kedua
const isPositiveOrNegative2 = num => {
  return num === 0 ? "Zero" : (num < 0 ? "Negative" : "Positive");
}

//Math.sign
const isPositiveOrNegative3 = num => {
  const sign = Math.sign(num);
  if (sign === -1) return "Negative";
  if (sign === 1) return "Positive";
  return "Zero";
}

//switch statement
const isPositiveOrNegative4 = num => {
  switch (true) {
    case num < 0:
      return "Negative";
    case num > 0:
      return "Positive";
    default:
      return "Zero";
  }
}

//Object dan Math.sign
const isPositiveOrNegative5 = num => {
  const result = {
    "-1": "Negative",
    "1": "Positive"
  }

  return result[Math.sign(num)] || "Zero";
}


const isPositiveOrNegative6 = num => {
  const states = ["Negative", "Positive"];
  return num === 0 ? "Zero" : states[+!(num < 0)];
}

console.log(isPositiveOrNegative1(0));
console.log(isPositiveOrNegative2(0));
console.log(isPositiveOrNegative3(0));
console.log(isPositiveOrNegative4(0));
console.log(isPositiveOrNegative5(0));
console.log(isPositiveOrNegative6(0));
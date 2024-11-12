//5. Hitung Frekuensi Karakter
//Buat fungsi characterFrequency(str) yang menerima string str dan mengembalikan objek dengan karakter-karakter sebagai kunci dan jumlah kemunculannya sebagai nilai.

function characterFrequency(str) {
  let newStr = {};
  for (let char of str) {
    if (newStr[char]) {
      newStr[char] += 1;
    } else {
      newStr[char] = 1;
    }
  }
  return newStr;
}

console.log(characterFrequency("javascript"));
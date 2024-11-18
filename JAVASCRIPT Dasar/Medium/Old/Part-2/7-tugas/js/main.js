//11. Mengonversi Array ke Objek
//Buat fungsi arrayToObject(arr) yang mengonversi array menjadi objek dengan index sebagai key dan nilai array sebagai value.

function arrayToObject(arr) {
  const obj = {};
  arr.forEach((value, index) => {
    obj[index] = value;
  });
  return obj;
}

console.log(arrayToObject([1, 2, 3]));
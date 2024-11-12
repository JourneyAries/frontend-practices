//10. Konversi Objek ke Array Pasangan
//Buat fungsi objectToArray(obj) yang menerima objek obj dan mengembalikannya sebagai array pasangan key-value.

function objectToArray(obj) {
  return Object.entries(obj);
}

console.log(objectToArray({ a: 1, b: 2 }));
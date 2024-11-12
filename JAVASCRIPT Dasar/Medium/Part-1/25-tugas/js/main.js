//25. Mengonversi Objek ke String Query
//Buat fungsi objectToQueryString(obj) yang menerima objek obj dan mengembalikan string yang mewakili query string dari objek tersebut.

function objectToQueryString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

console.log(objectToQueryString({ name: "john", age: 30 })); 
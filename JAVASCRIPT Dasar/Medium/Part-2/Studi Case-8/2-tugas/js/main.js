// Studi Kasus 2: Memahami Object.seal() (Level 2 - Easy)
// Deskripsi: Gunakan Object.seal() untuk mencegah penambahan properti baru pada objek, tetapi masih bisa mengubah nilai properti yang ada.

function sealObject(obj) {
  Object.seal(obj);  // Menggunakan Object.seal untuk menutup objek

  // Mengubah properti yang ada
  obj.model = "Corolla";  // Properti yang sudah ada, bisa diubah

  // Mencoba menambahkan properti baru
  obj.year = 2022;  // Tidak bisa menambah properti baru

  return obj;
}

const car = { make: "Toyota", model: "Camry" };
const updatedCar = sealObject(car);

console.log(updatedCar); // Output: { make: "Toyota", model: "Corolla" }

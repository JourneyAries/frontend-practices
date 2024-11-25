// Studi Kasus 3: Referensi dan Modifikasi Objek (Level 3 - Medium)
// Deskripsi: Modifikasi nilai dalam objek dan jelaskan efeknya pada referensi objek.

let car = { brand: "Toyota", model: "Corolla" };
let car1 = car;

function modifyObjectReference(car1) {
  car1.model = "Camry";  // Mengubah properti model melalui car1
  console.log(car); // Output: { brand: "Toyota", model: "Camry" }
}

modifyObjectReference(car1);

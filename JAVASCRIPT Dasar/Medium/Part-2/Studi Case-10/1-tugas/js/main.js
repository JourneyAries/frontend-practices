// Studi Kasus 1: Menambahkan dan Menghapus Properti Secara Dinamis (Level 1 - Easy)
// Deskripsi: Manipulasi objek dengan menambahkan dan menghapus properti secara dinamis.

const car = { brand: "Toyota", model: "Corolla" };

function modifyObjectProperties(car) {
  car.year = 2020;  // Menambahkan properti baru "year" dengan nilai 2020
  delete car.model; // Menghapus properti "model" dari objek

  console.log(car); // Menampilkan objek yang telah dimodifikasi
}

modifyObjectProperties(car);

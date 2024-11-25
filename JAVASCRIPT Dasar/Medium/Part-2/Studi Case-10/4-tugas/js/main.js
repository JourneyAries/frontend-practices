// Studi Kasus 4: Manipulasi Objek dengan Metode Object.entries(), Object.keys(), dan Object.values() (Level 4 - Hard)
// Deskripsi: Gunakan metode Object.entries(), Object.keys(), dan Object.values() untuk memanipulasi objek secara dinamis.

const car = { brand: "Toyota", model: "Camry", year: 2021 };

function objectManipulation(car) {
  // Menggunakan Object.entries() untuk mendapatkan pasangan key-value
  const entries = Object.entries(car);
  
  // Menggunakan Object.keys() untuk mendapatkan array dari semua key
  const keys = Object.keys(car);
  
  // Menggunakan Object.values() untuk mendapatkan array dari semua nilai
  const values = Object.values(car);

  console.log("Entries:", entries); // Output: [["brand", "Toyota"], ["model", "Camry"], ["year", 2021]]
  console.log("Keys:", keys); // Output: ["brand", "model", "year"]
  console.log("Values:", values); // Output: ["Toyota", "Camry", 2021]
}

objectManipulation(car);

// Studi Kasus 5: Deep Copy vs Shallow Copy (Level 5 - Very Hard)
// Deskripsi: Perbedaan antara shallow copy dan deep copy saat menduplikasi objek.

const person = { name: "Alice", address: { city: "New York" } };

function compareShallowAndDeepCopy(person) {
  // Membuat shallow copy
  const shallowCopy = Object.assign({}, person);
  
  // Membuat deep copy
  const deepCopy = JSON.parse(JSON.stringify(person));

  // Memodifikasi objek asli
  person.address.city = "Los Angeles";

  // Menampilkan hasil
  console.log("Original Object:", person);        // Objek asli yang telah dimodifikasi
  console.log("Shallow Copy:", shallowCopy);      // Shallow copy yang masih merujuk pada objek nested yang sama
  console.log("Deep Copy:", deepCopy);           // Deep copy yang tidak terpengaruh oleh perubahan objek asli
}

compareShallowAndDeepCopy(person);

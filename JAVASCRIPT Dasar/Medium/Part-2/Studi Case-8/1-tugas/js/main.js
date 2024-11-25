//Studi Kasus 1: Memahami Object.freeze() (Level 1 - Easy)
//Deskripsi: Gunakan Object.freeze() untuk membekukan objek dan mencegah perubahan pada objek tersebut.

// Fungsi untuk membekukan objek
function freezeObject(obj) {
  Object.freeze(obj);
}

// Objek yang diberikan
const person = { name: "Alice", age: 30 };

// Membekukan objek
freezeObject(person);

// Mencoba mengubah properti
person.age = 35;  // Tidak akan mengubah nilai age
person.city = "New York";  // Tidak akan menambah properti baru

// Menampilkan objek setelah dicoba diubah
console.log(person);  // Output: { name: "Alice", age: 30 }

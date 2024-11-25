// Studi Kasus 4: Menggunakan Object.freeze() pada Nested Objects (Level 4 - Hard)
// Deskripsi: Gunakan Object.freeze() untuk membekukan objek bertingkat (nested objects).

function freezeNestedObject(obj) {
  // Membekukan objek utama (user)
  Object.freeze(obj);

  // Membekukan objek di dalamnya (address)
  Object.freeze(obj.address);

  // Mencoba mengubah properti pada objek yang telah dibekukan
  obj.address.city = "Los Angeles"; // Tidak bisa merubah city
  obj.name = "Bob"; // Tidak bisa merubah name

  console.log(obj); // Output: { name: "Alice", address: { street: "123 Main St", city: "New York" } }
}

const user = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "New York"
  }
};

freezeNestedObject(user);

// Studi Kasus 2: Menggabungkan Objek (Level 2 - Easy)
// Deskripsi: Gabungkan dua objek menggunakan metode Object.assign() atau spread operator (...).

const person = { name: "John" };
const contact = { email: "john@example.com", phone: "12345" };

function mergeObjects(person, contact) {
  // Menggabungkan objek person dan contact menggunakan spread operator
  const mergedObject = { ...person, ...contact };

  // Menampilkan objek yang sudah digabungkan
  console.log(mergedObject); 
  // Output: { name: "John", email: "john@example.com", phone: "12345" }

  // Memastikan objek person dan contact tetap tidak berubah
  console.log(person);  // Output: { name: "John" }
  console.log(contact); // Output: { email: "john@example.com", phone: "12345" }
}

mergeObjects(person, contact);

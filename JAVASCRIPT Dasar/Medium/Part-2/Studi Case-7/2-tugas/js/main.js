// Studi Kasus 2: Destructuring Object (Level 2 - Easy)
// Deskripsi: Buat program untuk mengekstrak nilai dari objek menggunakan destructuring.

function extractUserInfo(user) {
  const { name, age, email } = user;
  console.log(name, age, email);
}

const user = { name: "John", age: 25, email: "john@example.com" };
extractUserInfo(user);

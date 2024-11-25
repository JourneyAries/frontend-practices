//Studi Kasus 3: Destructuring dengan Default Value (Level 3 - Medium)
//Deskripsi: Gunakan destructuring untuk mengekstrak nilai dari objek, dengan memberikan nilai default jika properti tidak ada.

function extractUserInfoWithDefault(user) {
  const { name, age, email = "no-email@example.com" } = user;
  console.log(name, age, email);
}

const user = { name: "Jane", age: 30 };

extractUserInfoWithDefault(user);
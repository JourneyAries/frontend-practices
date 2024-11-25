// Studi Kasus 3: Sistem Pengguna (Medium-Hard)

// Soal 1: Buat fungsi untuk membuat objek pengguna dengan properti username, email, dan age.


function createUser(username, email, age) {
  return {
    username: username,
    email: email,
    age: age
  }
}

const user1 = createUser("johndoe", "john@example.com", 25);
console.log(user1);

// Soal 2: Buat fungsi untuk menambahkan properti isActive ke objek pengguna.

function setUserActive(user, isActive) {
  user.isActive = isActive;
  return user;
}

console.log(setUserActive(user1, true));

// Soal 3: Buat fungsi untuk memfilter pengguna berdasarkan usia tertentu.

function filterUsersByAge(users, minAge) {
  return users.filter(user => user.age >= minAge);
}

const filteredUserByAge = filterUsersByAge([
  { username: "johndoe", email: "john@example.com", age: 25 },
  { username: "janedoe", email: "jane@example.com", age: 20 }
], 21);

console.log(filteredUserByAge);
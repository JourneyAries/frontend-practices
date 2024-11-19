// 21. Simulasi Login Sederhana
// Buat fungsi login(username, password) yang memverifikasi pasangan username dan password.

// Hint:
// Simpan pasangan username-password dalam array objek.
// Periksa apakah pasangan input cocok dengan data.

// console.log(login("admin", "1234")); Output: "Login berhasil"
// console.log(login("user", "wrong")); Output: "Login gagal"


//array object
function login1(username, password) {
  const users = [
    { username: "admin", password: "1234" },
    { username: "user", password: "abcd" }
  ];

  const user = users.find(u => u.username === username && u.password === password);

  return user ? "Login berhasil" : "Login gagal";
}

console.log(login1("admin", "1234"));
console.log(login1("user", "wrong"));

//for loop
function login(username, password) {
  const users = [
    { username: "admin", password: "1234" },
    { username: "user", password: "abcd" }
  ];

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      return "Login berhasil";
    }
  }

  return "Login gagal";
}

console.log(login("admin", "1234"));
console.log(login("user", "wrong"));

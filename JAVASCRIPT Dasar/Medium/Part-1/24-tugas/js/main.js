// 24. Validasi Kata Sandi Kuat
// Buat fungsi isStrongPassword(password) untuk memeriksa apakah kata sandi memenuhi kriteria:

// Minimal 8 karakter.
// Mengandung huruf besar, huruf kecil, angka, dan simbol.
// Hint:
// Gunakan metode string untuk memeriksa karakter tertentu.
// Return true jika memenuhi semua kriteria.

// console.log(isStrongPassword("Pass123!")); Output: true
// console.log(isStrongPassword("weakpass")); Output: false

function isStrongPassword(password) {
  // Memeriksa apakah password memenuhi semua kriteria:
  // 1. Minimal 8 karakter
  // 2. Mengandung setidaknya satu huruf besar (A-Z)
  // 3. Mengandung setidaknya satu huruf kecil (a-z)
  // 4. Mengandung setidaknya satu angka (0-9)
  // 5. Mengandung setidaknya satu simbol (misalnya: !@#$%^&*)

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  // Mengembalikan true jika password memenuhi semua kriteria, false jika tidak
  return regex.test(password);
}

console.log(isStrongPassword("Pass123!"));  // Output: true
console.log(isStrongPassword("weakpass"));  // Output: false

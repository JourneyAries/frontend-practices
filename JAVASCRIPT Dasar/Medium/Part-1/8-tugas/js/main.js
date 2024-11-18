// 8. Validasi Email
// Buat fungsi isValidEmail(email) untuk mengecek format email sederhana.

// Hint:
// Pastikan email mengandung:
// Karakter @.
// Domain seperti .com atau .id.

// console.log(isValidEmail("user@example.com")); Output: true
// console.log(isValidEmail("userexample.com")); Output: false

//regex
function isValidEmail1(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

//string method
function isValidEmail2(email) {
  return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
}

console.log(isValidEmail1("user@example.com"));
console.log(isValidEmail2("user@example.com"));
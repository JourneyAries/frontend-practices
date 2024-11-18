// 9. Generator Kata Sandi
// Buat fungsi generatePassword(length) untuk membuat password acak.

// Hint:
// Gunakan karakter alfanumerik.
// Hasilkan string sepanjang length.

// console.log(generatePassword(8)); // Output: "a1B2c3D4"


//for
function generatePassword1(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';

  for (let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

//array dan join
function generatePassword2(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

console.log(generatePassword1(8))
console.log(generatePassword2(8))
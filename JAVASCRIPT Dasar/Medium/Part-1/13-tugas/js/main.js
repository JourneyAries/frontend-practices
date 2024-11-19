// 13. Validasi Nomor Telepon
// Buat fungsi isValidPhoneNumber(number).

// Hint:
// Pastikan nomor mengandung:
// Panjang 10-13 karakter.
// Hanya angka.
// Contoh Pemanggilan:

// console.log(isValidPhoneNumber("08123456789")); // Output: true

//regex
function isValidPhoneNumber1(number) {
  const phonePattern = /^\d{10,13}$/;
  return phonePattern.test(number);
}

//string method
function isValidPhoneNumber2(number) {
  if (number.length < 10 || number.length > 13) {
    return false;
  }
  return number.split('').every(char => char >= '0' && char <= '9')
}

//array filter
function isValidPhoneNumber3(number) {
  if (number.length < 10 || number.length > 13) {
    return false;
  }

  const digits = number.split(''.filter(char => char >= '0' && char <= '9'));
  return digits.length === number.length;
}

console.log(isValidPhoneNumber1("08123456789"));
console.log(isValidPhoneNumber2("08123456789"));
console.log(isValidPhoneNumber3("08123456789"));
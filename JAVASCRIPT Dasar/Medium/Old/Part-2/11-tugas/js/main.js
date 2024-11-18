//11. Mengecek Apakah Tanggal Valid
//Buat fungsi isValidDate(dateString) yang menerima string dateString dalam format "YYYY-MM-DD" dan mengembalikan true jika tanggal tersebut valid.

function isValidDate(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) {
    return false
  }

  const date = new Date(dateString);

  return date.toISOString().slice(0, 10) === dateString;
}

console.log(isValidDate("2024-11-12"));
console.log(isValidDate("2024-02-29"));
console.log(isValidDate("2023-04-31"));
console.log(isValidDate("2020-12-31"));
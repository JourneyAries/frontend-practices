// 15. Penentuan Hari Kerja atau Libur
// Buat fungsi isWeekend(day) yang menentukan apakah hari tertentu adalah akhir pekan.

// Hint:
// Terima argumen berupa nama hari dalam bahasa Inggris (misalnya, "Monday", "Sunday").
// Return true jika hari adalah "Saturday" atau "Sunday", false sebaliknya.

// console.log(isWeekend("Sunday")); // Output: true
// console.log(isWeekend("Monday")); // Output: false

function isWeekend1(day) {
  const weekend = ['saturday', 'sunday'];
  return weekend.includes(day.toLowerCase());
}

function isWeekend2(day) {
  switch (day.toLowerCase()) {
    case 'saturday':
    case 'sunday':
      return true;
    default:
      return false;
  }
}

console.log(isWeekend1("Sunday"))
console.log(isWeekend2("Sunday"))
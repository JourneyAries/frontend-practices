// 11. Konversi Jam ke Detik
// Buat fungsi convertTimeToSeconds(hours, minutes, seconds).

// Hint:
// Konversi:
// Jam ke detik: hours * 3600.
// Menit ke detik: minutes * 60.

// console.log(convertTimeToSeconds(1, 30, 45)); // Output: 5445

//cara pertama
function convertTimeToSeconds1(hours, minutes, seconds) {
  return (hours * 3600 + minutes * 60 + seconds );
}

//cara kedua
const convertTimeToSeconds2 = (hours, minutes, seconds) =>
  hours * 3600 + minutes * 60 + seconds;

//berikan parameter default
const convertTimeToSeconds3 = (hours = 0, minutes = 0, seconds = 0) =>
  hours * 3600 + minutes * 60 + seconds;

//struktur data
const convertTimeToSeconds4 = ({ hours = 0, minutes = 0, seconds = 0 }) =>
  hours * 3600 + minutes * 60 + seconds;

console.log(convertTimeToSeconds1(1, 30, 45));
console.log(convertTimeToSeconds2(1, 30, 45));
console.log(convertTimeToSeconds3(1, 30, 45));
console.log(convertTimeToSeconds4({ hours: 1, minutes: 30, seconds: 45}));
//25. Konversi Detik ke Jam, Menit, dan Detik
//Fungsi: convertSeconds(seconds)
//Parameter: seconds (integer)
//Hint: Bagi untuk jam, sisa untuk menit, lalu sisa untuk detik.
//Contoh Pemanggilan: convertSeconds(3661) // "1:1:1"

//cara pertama
function convertSeconds1(seconds) {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const finalSeconds = remainingSeconds % 60;

  return `${hours}:${minutes}:${finalSeconds}`;
}

//cara kedua
function convertSeconds2(seconds) {
  return `${Math.floor(seconds / 3600)}:${Math.floor((seconds % 3600)/60)}:${seconds % 60}`;
}

console.log(convertSeconds1(3661));
console.log(convertSeconds2(3661));
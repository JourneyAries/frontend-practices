//10. Konversi Jam ke Detik
//Fungsi: hoursToSeconds(hours)
//Parameter: hours (integer)
//Hint: Kalikan hours dengan 3600.
//Contoh Pemanggilan: hoursToSeconds(2) // 7200


//Math.floor
function hoursToSeconds1(hours) {
  return Math.round(hours * 3600);
}

//Operator Bitwise
function hoursToSeconds2(hours) {
  return (hours * 3600) | 0;
}

console.log(hoursToSeconds1(2));
console.log(hoursToSeconds2(2));
//6. Konversi Waktu ke Format 12-Jam
//Buat fungsi convertTo12HourFormat(time24) yang menerima waktu dalam format 24 jam (misalnya, "14:30") dan mengembalikannya dalam format 12 jam (misalnya, "2:30 PM").

function convertTo12HourFormat(time24) {
  let [hour, minute] = time24.split(':');
  hour = parseInt(hour);
  const period = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  
  return `${hour}:${minute} ${period}`;
}

console.log(convertTo12HourFormat("14:30"));
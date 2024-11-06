//23. Mengonversi Detik ke Format Jam:Menit
//Buat fungsi convertToTime(seconds) yang menerima jumlah detik dan mengembalikan format "hh:mm:ss".
//Contoh: convertToTime(3661) mengembalikan "01:01:01".

function convertToTime(detik) {
  let jam = Math.floor(detik / 3600);
  detik %= 3600;

  let menit = Math.floor(detik / 60);
  detik %= 60;


  jam = String(jam).padStart(2, '0');
  menit = String(menit).padStart(2, '0');
  detik = String(detik).padStart(2, '0');
  return `${jam}:${menit}:${detik}`;
}

console.log(convertToTime(3661));
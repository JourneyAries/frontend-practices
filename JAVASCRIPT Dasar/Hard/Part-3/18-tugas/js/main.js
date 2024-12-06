// Menampilkan Waktu di Zona Waktu Lain
// Pseudocode:
// Tangkap elemen <h1> dengan ID timeInOtherZone.
// Gunakan objek Date() untuk mendapatkan waktu sekarang.
// Gunakan metode .toLocaleString() dengan opsi zona waktu untuk menampilkan waktu di zona waktu lain (misalnya, "en-US", {timeZone: "Asia/Jakarta"}).
// Tampilkan waktu yang diformat dengan zona waktu yang sesuai di dalam elemen <h1>.
// Cara Berpikir:
// .toLocaleString() memungkinkan kita untuk menampilkan waktu sesuai dengan format dan zona waktu yang diinginkan.
// Kamu bisa mengganti zona waktu sesuai kebutuhan

const timeInOtherZone = document.getElementById('timeInOtherZone');
const today = new Date();

timeInOtherZone.textContent += today.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });

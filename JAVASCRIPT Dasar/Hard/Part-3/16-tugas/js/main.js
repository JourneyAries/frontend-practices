// Menampilkan Waktu dalam Format 12 Jam
// Pseudocode:
// Tangkap elemen <h1> dengan ID time12.
// Gunakan objek Date() untuk mendapatkan waktu saat ini.
// Ambil jam dengan .getHours(), menit dengan .getMinutes(), dan detik dengan .getSeconds().
// Tentukan apakah waktu tersebut AM atau PM berdasarkan jam.
// Format waktu menjadi HH:MM:SS AM/PM.
// Tampilkan waktu pada elemen <h1>.
// Cara Berpikir:
// Waktu dalam format 12 jam memerlukan penyesuaian AM/PM, jadi kita perlu memeriksa apakah jam lebih besar dari 12 untuk menambahkan PM, dan jika tidak, AM.
// Gunakan kondisi untuk memformat waktu yang lebih kecil dari 10, agar tampil sebagai dua digit (misalnya, 09:03:05).

const time12 = document.getElementById('time12');

const today = new Date();
let jam = today.getHours();
const menit = String(today.getMinutes()).padStart(2, '0');
const detik = String(today.getSeconds()).padStart(2, '0');

let period = 'AM';

// Tentukan apakah waktu AM atau PM
if (jam >= 12) {
	period = 'PM';
	if (jam > 12) {
		jam -= 12; // Jika jam lebih dari 12, kurangi untuk format 12 jam
	}
} else if (jam === 0) {
	jam = 12; // Jam 0 (tengah malam) menjadi 12
}

jam = String(jam).padStart(2, '0'); // Pastikan jam selalu dua digit

time12.textContent = `${jam}:${menit}:${detik} ${period}`;

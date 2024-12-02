// Tugas 2: Tambah Elemen Baru
// Soal: Tambahkan elemen < h2 > baru dengan teks "This is a new header" ke dalam elemen < div > dengan id content.
// Hint: Gunakan document.createElement('h2'), atur teksnya dengan .innerText, lalu tambahkan menggunakan .appendChild().

const container = document.getElementById('content');
const heading2 = document.createElement('h2');
heading2.innerHTML = ('This is a new header');
container.appendChild(heading2);
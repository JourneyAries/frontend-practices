// Soal 20: Menerapkan Event Bubbling
// Soal: Tambahkan event listener pada container <div> dan tombol. Ketika tombol diklik, event bubbling terjadi, sehingga alert muncul untuk keduanya.
// Hint: Jangan gunakan event.stopPropagation().

const outerContainer = document.getElementById('outerContainer');
const innerButton = document.getElementById('innerButton');

outerContainer.addEventListener('click', () => {
	alert('Container diklik!');
});

innerButton.addEventListener('click', () => {
	alert('Tombol diklik!');
});

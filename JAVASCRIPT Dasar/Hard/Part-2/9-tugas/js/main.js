// Soal 9: Event Bubbling
// Soal: Ciptakan event bubbling antara dua elemen, yaitu div dan tombol. Ketika tombol diklik, tangkap event bubbling dari div.
// Hint: Gunakan event.stopPropagation() pada tombol.

const container = document.getElementById('container');
const myButton = document.getElementById('myButton');

container.addEventListener('click', () => {
	alert('Container diklik!');
});

myButton.addEventListener('click', (ev) => {
	alert('Tombol diklik!');
	e.stopPropagation();
});

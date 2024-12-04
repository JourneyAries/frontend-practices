// Soal 24: Menyoroti Elemen dengan Mouseover
// Soal: Tambahkan efek sorotan pada elemen <div> saat mouse diarahkan ke atasnya, dan kembalikan ke normal saat mouse keluar.
// Hint: Gunakan mouseover dan mouseout events.

const hoverBox = document.getElementById('hoverBox');

hoverBox.addEventListener('mouseover', () => {
	hoverBox.style.backgroundColor = 'lightblue';
});

hoverBox.addEventListener('mouseout', () => {
	hoverBox.style.backgroundColor = '';
});

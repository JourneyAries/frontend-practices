// Soal 16: Prevent Default pada Link
// Soal: Tambahkan event listener pada link sehingga ketika link diklik, alih-alih membuka URL, munculkan alert dengan teks "Default action prevented".
// Hint: Gunakan event.preventDefault().

const myLink = document.getElementById('myLink');

myLink.addEventListener('click', function (e) {
	e.preventDefault();
	alert('Default action prevented');
});

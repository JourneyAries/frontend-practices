// Soal 8: Event Listener dengan PreventDefault
// Soal: Tambahkan event listener pada form yang mencegah halaman melakukan refresh saat tombol submit ditekan.
// Hint: Gunakan event.preventDefault().

const myForm = document.getElementById('myForm');
const text = document.querySelector('[type="text"]');
const button = document.querySelector('[type="submit"]');

myForm.addEventListener('submit', function (e) {
	e.preventDefault();
	alert('form tidak terkirim');
});

// Tugas 17: Validasi Input Form
// Soal: Cegah pengiriman formulir jika input kosong, dan tampilkan pesan error di bawah input.
//Hint: Gunakan preventDefault() dan validasi value dari input.

const myForm = document.getElementById('myForm');
const nameinput = document.getElementById('nameInput');
const errorMessage = document.getElementById('errorMessage');

myForm.addEventListener('submit', (e) => {
	if (nameinput.value.trim() === '') {
		e.preventDefault();
		errorMessage.style.display = 'block';
	} else {
		errorMessage.style.display = 'none';
	}
});

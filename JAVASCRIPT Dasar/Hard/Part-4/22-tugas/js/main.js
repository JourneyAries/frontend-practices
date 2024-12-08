// Judul Tugas: Validasi Formulir Sederhana

// Pseudocode Lengkap:
// Buat form dengan input teks untuk nama, email, dan password.
// Ketika form dikirimkan, validasi:
// Nama tidak boleh kosong.
// Email harus dalam format yang valid.
// Password harus memiliki minimal 6 karakter.
// Jika ada input yang tidak valid, tampilkan pesan error di bawah input yang bersangkutan.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan regex untuk memvalidasi format email.
// Gunakan length untuk memeriksa panjang password.
// Gunakan textContent untuk menampilkan pesan error.

const formContainer = document.getElementById('form-container');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnSubmit = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');

formContainer.addEventListener('submit', (e) => {
	e.preventDefault();

	let error = '';

	if (inputName.value.trim() === '') {
		error = 'Error: nama tidak boleh kosong';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value.trim())) {
		error = 'Error: format email tidak valid';
	} else if (inputPassword.value.includes(' ')) {
		error = 'Error: password tidak boleh mengandung spasi';
	} else if (inputPassword.value.length < 6) {
		error = 'Error: password harus minimal 6 karakter';
	}

	if (error) {
		errorMessage.textContent = error;
		return;
	}

	errorMessage.textContent = '';
	console.log('Form submitted successfully');

	// //validation nama
	// if (inputName.value.trim() === '') {
	// 	errorMessage.textContent = 'Error: nama tidak boleh kosong';
	// 	return;
	// }

	// //validation email
	// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	// if (!emailRegex.test(inputEmail.value.trim())) {
	// 	errorMessage.textContent = 'Error: format email tidak valid';
	// 	return;
	// }

	// //validation password
	// if (inputPassword.value.includes(' ')) {
	// 	errorMessage.textContent = 'Error: password tidak boleh mengandung spasi';
	// 	return;
	// }

	// if (inputPassword.value.length < 6) {
	// 	errorMessage.textContent = 'Error: password harus minimal 6 karakter';
	// 	return;
	// }

	// // Jika semua validasi berhasil
	// errorMessage.textContent = '';
	// console.log('Form submitted successfully');
});

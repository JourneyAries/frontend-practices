// Judul Tugas: Form Pengisian dan Tampilan Data Pengguna

// Pseudocode Lengkap:
// Buat form pengisian data pengguna, seperti nama, email, dan usia.
// Ketika tombol "Kirim" ditekan, tampilkan data pengguna di bawah form.
// Jika data sudah ditampilkan, tombol "Kirim" akan mengubah menjadi tombol "Edit" yang memungkinkan pengguna mengedit informasi yang sudah dimasukkan.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan textContent untuk menampilkan data pengguna.
// Gunakan toggle atau perubahan status tombol dari "Kirim" ke "Edit" dengan innerHTML.
// Pastikan ketika tombol "Edit" diklik, form akan menampilkan data lama untuk diedit.

const btnSubmit = document.getElementById('submit-btn');
const dataUser = document.getElementById('user-data');

btnSubmit.addEventListener('click', (e) => {
	e.preventDefault();

	const inputName = document.getElementById('name');
	const inputEmail = document.getElementById('email');
	const inputAge = document.getElementById('age');

	if (btnSubmit.textContent === 'Kirim') {
		const name = inputName.value.trim();
		const email = inputEmail.value.trim();
		const age = inputAge.value.trim();

		if (!name || !email || !age) {
			alert('Harap isi semua kolom!');
			return;
		}

		dataUser.innerHTML = `
      <p>Nama: ${name}</p>
      <p>Email: ${email}</p>
      <p>Usia: ${age}</p>
    `;

		btnSubmit.textContent = 'Edit';
		inputName.disabled = true;
		inputEmail.disabled = true;
		inputAge.disabled = true;
	} else if (btnSubmit.textContent === 'Edit') {
		btnSubmit.textContent = 'Kirim Updated';
		inputName.disabled = false;
		inputEmail.disabled = false;
		inputAge.disabled = false;
	} else if (btnSubmit.textContent === 'Kirim Updated') {
		const updatedName = inputName.value.trim();
		const updatedEmail = inputEmail.value.trim();
		const updatedAge = inputAge.value.trim();

		if (!updatedName || !updatedEmail || !updatedAge) {
			alert('Harap isi semua kolom!');
			return;
		}

		dataUser.innerHTML = `
      <p>Nama: ${updatedName}</p>
      <p>Email: ${updatedEmail}</p>
      <p>Usia: ${updatedAge}</p>
    `;

		btnSubmit.textContent = 'Edit';
		inputName.disabled = true;
		inputEmail.disabled = true;
		inputAge.disabled = true;
	}
});

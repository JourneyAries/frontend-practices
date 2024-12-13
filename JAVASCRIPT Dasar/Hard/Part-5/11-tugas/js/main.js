// project #: 3
// judul project: Form Pendaftaran Pengguna
// list fitur utama:
// 1. Input nama pengguna.
// 2. Input email pengguna.
// 3. Input nomor telepon pengguna.
// 4. Validasi input (email harus valid, nomor telepon harus angka).
// 5. Menampilkan pesan sukses setelah form berhasil dikirim.
// list main requirement:
// 1. Menggunakan form dengan field nama, email, dan nomor telepon.
// 2. Menampilkan pesan sukses atau error setelah pengiriman form.

const registrationForm = document.getElementById('registration-form');
const message = document.getElementById('message');
const listItems = document.getElementById('list-items');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const submitButton = document.querySelector('[type="submit"]');

registrationForm.addEventListener('click', (e) => {
	if (e.target.textContent === 'Daftar') {
		e.preventDefault();

		//value
		const name = nameInput.value.trim();
		const email = emailInput.value.trim();
		const phone = phoneInput.value.trim();

		//regex
		const rgxName = /^[a-zA-Z\s]+$/;
		const rgxEmail = /@/;
		const rgxPhone = /^[0-9]+$/;

		//validasi input
		if (!rgxName.test(name)) {
			message.textContent = 'Error: "Nama" hanya boleh berisikan huruf';
			message.classList.add('error');
			return;
		}

		if (!rgxEmail.test(email)) {
			message.textContent = 'Error: Gunakan format email yang valid';
			message.classList.add('error');
			return;
		}

		if (!rgxPhone.test(phone)) {
			message.textContent = 'Error: "Nomor Telpon" hanya boleh berisikan angka';
			message.classList.add('error');
			return;
		}

		//masukan ke dalam listItem
		const item = document.createElement('li');
		item.innerHTML = `<span>${name}</span> - <span>${email}</span> - <span>${phone}</span><hr>`;
		listItems.appendChild(item);

		message.textContent = 'Berhasil: cek email kamu untuk info lebih lanjut';
		message.classList.remove('error');
		message.classList.add('success');

		//mengkosongkan inputan
		nameInput.value = '';
		emailInput.value = '';
		phoneInput.value = '';

		//ubah style tombol daftar
		submitButton.textContent = 'Terimakasih telah mendaftar';
		submitButton.style.backgroundColor = '#b0b0b0';
		submitButton.style.color = 'black';
		setTimeout(() => {
			submitButton.textContent = 'Daftar';
			submitButton.style.backgroundColor = '#4caf50';
			submitButton.style.color = 'white';
		}, 3000);
	}
});

registrationForm.addEventListener('input', (e) => {
	if (nameInput !== '') {
		message.textContent = '';
		message.classList.remove('error', 'success');
	}
	if (emailInput.value !== '') {
		message.textContent = '';
		message.classList.remove('error', 'success');
	}
	if (phoneInput.value !== '') {
		message.textContent = '';
		message.classList.remove('error', 'success');
	}
});

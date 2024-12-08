// Judul Tugas: Menyusun Daftar Kontak

// Pseudocode Lengkap:
// Buat form dengan input teks untuk nama, alamat email, dan nomor telepon.
// Buat tombol "Tambah Kontak".
// Ketika tombol ditekan, ambil nilai dari input, buat elemen <li> untuk setiap kontak baru, dan tampilkan di daftar kontak.
// Setiap kontak harus memiliki tombol "Hapus" untuk menghapus kontak tersebut dari daftar.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan createElement() untuk membuat elemen baru.
// Gunakan appendChild() untuk menambahkan elemen ke dalam daftar.
// Gunakan removeChild() untuk menghapus elemen dari daftar.

const contactForm = document.getElementById('contact-form');
const contactList = document.getElementById('contact-list');

contactForm.addEventListener('click', (e) => {
	const inputName = document.getElementById('name');
	const inputEmail = document.getElementById('email');
	const inputPhone = document.getElementById('phone');

	if (e.target.tagName === 'BUTTON') {
		e.preventDefault();

		const name = inputName.value;
		const email = inputEmail.value;
		const phone = inputPhone.value;

		const newContact = document.createElement('li');
		newContact.classList.add('contact-item');
		newContact.innerHTML = `
      <span>${name}</span> - <span>${email}</span> - <span>${phone}</span>
      <button>Delete Contact</button>
    `;
		contactList.appendChild(newContact);

		inputName.value = '';
		inputEmail.value = '';
		inputPhone.value = '';
	}
});

contactList.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		e.preventDefault();

		// let contactItem = e.target.parentElement;
		const contactItem = e.target.closest('.contact-item');
		if (contactItem && contactList.contains(contactItem)) {
			contactList.removeChild(contactItem);
		}
		// parentElement: Simpel untuk mengambil elemen induk langsung.
		//contains: Digunakan untuk memverifikasi apakah elemen masih bagian dari induknya, terutama jika Anda ingin menghindari error ketika elemen tidak valid.
		//closest: Ideal jika Anda mencari elemen tertentu yang mungkin tidak langsung menjadi induk, tetapi berada lebih tinggi dalam hierarki DOM.
	}
});

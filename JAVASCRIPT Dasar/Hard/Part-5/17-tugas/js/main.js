//judul project: Daftar Kontak
//list fitur utama:
// 1. Menambah kontak baru (nama, email, nomor telepon).
// 2. Mengedit informasi kontak.
// 3. Menghapus kontak dari daftar.
// 4. Menyaring kontak berdasarkan nama.
//list main requirement:
// 1. Form input untuk nama, email, dan nomor telepon.
// 2. Daftar kontak yang ditampilkan dengan tombol edit dan hapus.
// 3. Fitur pencarian untuk menyaring kontak berdasarkan nama.
// 4. Fungsi untuk mengedit dan menghapus kontak.

const contactArray = [
	{ name: 'fachrul', email: 'fachrul@gmail.com', phone: '09812381' },
	{ name: 'dina', email: 'dina@gmail.com', phone: '081234567' },
	{ name: 'budi', email: 'budi@yahoo.com', phone: '082345678' },
	{ name: 'sari', email: 'sari@outlook.com', phone: '085678912' },
	{ name: 'agus', email: 'agus@gmail.com', phone: '083456789' },
];

const searchContact = document.getElementById('search-contact');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactPhone = document.getElementById('contact-phone');
const btnAddContact = document.getElementById('add-contact-btn');
const contactList = document.getElementById('contact-list');

function renderContactList() {
	contactList.innerHTML = '';
	contactArray.forEach((contact) => {
		const contactItem = document.createElement('li');
		contactItem.classList.add('contact-item');
		contactItem.innerHTML = `${contact.name} - ${contact.email} - ${contact.phone}`;
		contactList.appendChild(contactItem);
	});
}

btnAddContact.addEventListener('click', () => {
	// Ambil nilai input
	const name = contactName.value.trim();
	const email = contactEmail.value.trim();
	const phone = contactPhone.value.trim();

	// Validasi input
	if (name === '' || email === '' || phone === '') {
		alert('Semua bidang harus diisi!');
		return;
	}

	// Tambahkan kontak baru ke array
	const newContact = { name, email, phone };
	contactArray.push(newContact);

	// Render ulang daftar kontak
	renderContactList();

	// Reset input
	contactName.value = '';
	contactEmail.value = '';
	contactPhone.value = '';
});

renderContactList();
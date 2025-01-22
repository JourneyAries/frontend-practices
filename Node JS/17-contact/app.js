const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact } = require('./utils/contacts');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts); //3rd middleware
app.use(express.static('public')); //built-in middleware

app.get('/', (req, res) => {
	const mahasiswa = [
		{
			nama: 'Sandika',
			email: 'sandikagalih@gmail.com',
		},
		{
			nama: 'Erik',
			email: 'erik@gmail.com',
		},
		{
			nama: 'Doddy Ferdiansyah',
			email: 'doddy@gmail.com',
		},
	];

	res.render('index', {
		layout: 'partials/main-layout',
		mahasiswa,
		title: 'Halaman Home',
	});
	console.log('Ini halaman home');
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'Halaman About',
		layout: 'partials/main-layout',
	});
});

app.get('/contact', (req, res) => {
	//menampilkan data kontak yang ada di data/contacts.json
	const contacts = loadContact();

	//menampilkan halaman kontak
	res.render('contact', {
		title: 'Halaman Contact',
		layout: 'partials/main-layout',
		//kirim contact ke view
		contacts,
	});
});

app.get('/contact/:nama', (req, res) => {
	//kita akan cari contact singular
	const contact = findContact(req.params.nama);

	//halaman detail baru.
	res.render('detail', {
		title: 'Halaman Detail Contact',
		layout: 'partials/main-layout',
		contact,
	});
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});

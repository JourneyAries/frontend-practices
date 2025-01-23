const express = require('express');
const { body, validationResult, check, cookie } = require('express-validator');
//body untuk menangkap apa yang sudah di isi dalam form
// validation result itu menyimpan data, lolos atau engga
const expressLayouts = require('express-ejs-layouts');
const { loadContact, findContact, addContact, cekDuplikat, deleteContact } = require('./utils/contacts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts); //3rd middleware
app.use(express.static('public')); //built-in middleware
app.use(express.urlencoded({ extended: true }));

//konfigurasi flash
app.use(cookieParser('secret'));
app.use(
	session({
		cookie: { maxAge: 6000 },
		secret: 'secret',
		resave: true,
		saveUninitialized: true,
	})
);
app.use(flash());

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
		contacts,
		msg: req.flash('msg'),
	});
});

app.get('/contact/add', (req, res) => {
	res.render('add-contact', {
		title: 'Form Tambah Data Contact',
		layout: 'partials/main-layout',
		errors: [],
	});
});

// process data contact
app.post(
	'/contact',
	[
		body('nama').custom((value) => {
			const duplikat = cekDuplikat(value);
			if (duplikat) {
				throw new Error('Nama contact sudah digunakan!');
			}
			return true;
		}),
		check('email', 'Email tidak valid').isEmail(),
		check('nohp', 'No HP tidak valid').isMobilePhone('id-ID'),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.render('add-contact', {
				title: 'Form Tambah Data Contact',
				layout: 'partials/main-layout',
				errors: errors.array(),
			});
		} else {
			addContact(req.body);
			//kirimkan flash message
			req.flash('msg', 'Data contact berhasil ditambahkan');
			res.redirect('/contact');
		}
	}
);

app.get('/contact/delete/:nama', (req, res) => {
	//harus dicek dulu ada ga di contacts
	const contacts = findContact(req.params.nama);

	//jika contact tidak ada
	if (!contacts) {
		res.status('404');
		res.send('<h1>404</h1>');
	} else {
		deleteContact(req.params.nama);
		req.flash('msg', 'Data contact berhasil dihapus');
		res.redirect('/contact');
	}
});

//akan menangkap apapun setelah slash, klo mau bikin route baru, pastikan sebelum route yang ini
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

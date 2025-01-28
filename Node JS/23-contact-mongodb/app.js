const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db'); //yang dijalanin cuma koneksi aja.
const Contact = require('./model/contact');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
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

//halaman about
app.get('/about', (req, res) => {
	res.render('about', {
		title: 'Halaman About',
		layout: 'partials/main-layout',
	});
});

//halaman contact
app.get('/contact', async (req, res) => {
	// data sudah dapat digunakan tapi dalam bentuk promise.
	// Contact.find().then((contact) => {
	// 	res.send(contact);
	// });

	//sekarang kita akan mengambil collection dari mongodb
	//find ini bentuknya promise. harus pake then.
	const contacts = await Contact.find();

	res.render('contact', {
		title: 'Halaman Contact',
		layout: 'partials/main-layout',
		contacts,
		msg: req.flash('msg'),
	});
});

app.get('/contact/:nama', async (req, res) => {
	const contact = await Contact.findOne({ nama: req.params.nama });

	res.render('detail', {
		title: 'Halaman Detail Contact',
		layout: 'partials/main-layout',
		contact,
	});
});

app.listen(port, () => {
	console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});
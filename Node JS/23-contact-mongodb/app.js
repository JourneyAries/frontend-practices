const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const { body, validationResult, check, Result } = require('express-validator');

const methodOverride = require('method-override');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db'); //yang dijalanin cuma koneksi aja.
const Contact = require('./model/contact');

const app = express();
const port = 3000;

//setup method override
app.use(methodOverride('_method'));

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

//kenapa disimpan sebelum detail? karna klo ditaro setelah detail, nanti dikira add itu nama contactnya.
app.get('/contact/add', (req, res) => {
	res.render('add-contact', {
		title: 'Form Tambah Data Contact',
		layout: 'partials/main-layout',
		errors: [],
	});
});

// process tambah data contact
app.post(
	'/contact',
	[
		body('nama').custom(async (value) => {
			//cek duplicate via mongodb
			const duplikat = await Contact.findOne({ nama: value });
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
			//gunakan mongodb
			Contact.insertMany(req.body, (error, result) => {
				req.flash('msg', 'Data contact berhasil ditambahkan');
				res.redirect('/contact');
			});
		}
	}
);

// app.get('/contact/delete/:nama', async (req, res) => {
// 	const contact = await Contact.findOne({ nama: req.params.nama });

// 	if (!contact) {
// 		res.status('404');
// 		res.send('<h1>404</h1>');
// 	} else {
// 		Contact.deleteOne({ _id: contact._id }).then((result) => {
// 			req.flash('msg', 'Data contact berhasil dihapus');
// 			res.redirect('/contact');
// 		});
// 	}
// });

app.delete('/contact', (req, res) => {
	Contact.deleteOne({ nama: req.body.nama }).then((result) => {
		req.flash('msg', 'Data contact berhasil dihapus');
		res.redirect('/contact');
	});
});

app.get('/contact/edit/:nama', async (req, res) => {
	const contact = await Contact.findOne({ nama: req.params.nama });
	res.render('edit-contact', {
		title: 'Form Data Data Contact',
		layout: 'partials/main-layout',
		errors: [],
		contact,
	});
});

//process ubah data
app.put(
	'/contact',
	[
		body('nama').custom(async (value, { req }) => {
			const duplikat = await Contact.findOne({ nama: value });
			if (value !== req.body.oldNama && duplikat) {
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
			res.render('edit-contact', {
				title: 'Form Ubah Data Contact',
				layout: 'partials/main-layout',
				errors: errors.array(),
				contact: req.body,
			});
		} else {
			Contact.updateOne(
				{ _id: req.body._id },
				{
					$set: {
						nama: req.body.nama,
						email: req.body.email,
						nohp: req.body.nohp,
					},
				}
			).then((result) => {
				req.flash('msg', 'Data contact berhasil diubah');
				res.redirect('/contact');
			});
		}
	}
);

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

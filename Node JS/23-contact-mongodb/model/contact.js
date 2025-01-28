const mongoose = require('mongoose');

//membuat schema untuk contacts
//secara otomatis mongo akan membuat versi pluralnya
const Contact = mongoose.model('Contact', {
	nama: {
		type: String,
		require: true,
	},
	nohp: {
		type: String,
		require: true,
	},
	email: {
		type: String,
	},
});

module.exports = Contact;

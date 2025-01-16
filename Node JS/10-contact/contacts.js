const chalk = require('chalk');
const fs = require('fs');
const validator = require('validator');

//membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath);
}

//membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
	fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const simpanContact = (nama, email, noHP) => {
	//validator email
	if (email) {
		if (!validator.isEmail(email)) {
			console.log(chalk.red.inverse.bold('Email tidak valid'));
			return false;
		}
	}

	//validator noHP
	if (!validator.isMobilePhone(noHP, 'id-ID')) {
		console.log(chalk.red.inverse.bold('No HP tidak valid'));
		return false;
	}

	const contact = { nama, email, noHP };
	const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
	const contacts = JSON.parse(fileBuffer);

	//check duplication
	const duplicated = contacts.find((contact) => contact.nama === nama);
	if (duplicated) {
		console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain!'));
		return false;
	}

	contacts.push(contact);
	fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

	console.log(chalk.green.inverse.bold('Terimakasih sudah memasukan data'));
};

module.exports = { simpanContact };

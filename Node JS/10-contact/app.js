// const contacts = require('./contacts');
const yargs = require('yargs');

// console.log(yargs.argv);
//fungsi utama program
const main = async () => {
	const nama = await contacts.tulisPertanyaan('Masukan nama anda: ');
	const email = await contacts.tulisPertanyaan('Masukan email anda: ');
	const noHP = await contacts.tulisPertanyaan('Masukan noHP anda: ');

	contacts.simpanContact(nama, email, noHP);
};

main();

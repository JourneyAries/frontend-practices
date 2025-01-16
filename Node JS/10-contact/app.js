const contacts = require('./contacts');
const yargs = require('yargs');

yargs
	.command({
		command: 'add',
		describe: 'Menambahkan contact baru',
		builder: {
			nama: {
				describe: 'Nama lengkap',
				demandOption: true,
				type: 'string',
			},
			email: {
				describe: 'Email',
				demandOption: false,
				type: 'string',
			},
			noHP: {
				describe: 'Nomor Handphone',
				demandOption: true,
				type: 'string',
			},
		},
		handler(argv) {
			contacts.simpanContact(argv.nama, argv.email, argv.noHP);
		},
	})
	.demandCommand();

yargs.command({
	command: 'list',
	describe: 'Menampilkan semua nama & no HP contact',
	handler() {
		contacts.listContact();
	},
});

yargs.command({
	command: 'detail',
	describe: 'Menampilkan detail sebuah contact berdasarkan nama',
	builder: {
		nama: {
			describe: 'Nama lengkap',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		contacts.detailContact(argv.nama);
	},
});

yargs.command({
	command: 'delete',
	describe: 'Menampilkan sebuah contact berdasarkan nama',
	builder: {
		nama: {
			describe: 'Nama lengkap',
			demandOption: true,
			type: 'string',
		},
	},
	handler(argv) {
		contacts.deleteContact(argv.nama);
	},
});

yargs.parse();

//core modules
//file system
// const fs = require('fs');

//menuliskan string ke file secara skinronus
// fs.writeFileSync('test.txt', 'hello world secara sinkronus');

// fs.readFile('test.txt', 'utf-8', (e, data) => {
// 	if (e) {
// 		console.error(e);
// 		return;
// 	}
// 	console.log(data);
// });

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Masukan nama anda: ', (nama) => {
	rl.question('Masukan No Hape: ', (hape) => {
		console.log(`Nama anda ${nama}, No Hape ${hape}`);
    rl.close();
	});
});

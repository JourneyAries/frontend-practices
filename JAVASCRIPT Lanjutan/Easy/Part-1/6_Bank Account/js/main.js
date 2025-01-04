// Tugas: Simpan nilai dalam variabel privat yang hanya bisa diakses oleh closure

// Fungsi bankAccount menerima parameter initialBalance
// Simpan initialBalance dalam variabel privat balance

// Kembalikan objek dengan dua metode:
// 1. deposit(amount):
//    - Tambahkan amount ke balance
//    - Cetak pesan dengan jumlah yang disetor dan saldo saat ini

// 2. withdraw(amount):
//    - Jika amount lebih besar dari balance:
//        - Cetak pesan bahwa saldo tidak mencukupi
//    - Jika tidak:
//        - Kurangi amount dari balance
//        - Cetak pesan dengan jumlah yang diambil dan saldo saat ini

// Contoh penggunaan:
// - Buat akun dengan saldo awal tertentu
// - Panggil metode deposit untuk menyetor uang
// - Panggil metode withdraw untuk menarik uang

function bankAccount(initialBalance) {
	let balance = initialBalance;

	function deposite(amount) {
		balance += amount;
		console.log(`Deposited: ${amount}, balance: ${balance}`);
	}

	function withdraw(amount) {
		console.log(amount > balance ? 'Insufficient Funds!' : `Withdraw: ${amount}, balance ${(balance -= amount)}`);
	}

	function getBalance() {
		console.log(`Balance: ${balance}`);
	}

	return { deposite, withdraw, getBalance };
}

const myAccount = bankAccount(100);
myAccount.getBalance();
myAccount.deposite(20);
myAccount.deposite(10);
myAccount.withdraw(60);

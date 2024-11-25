//Studi Kasus 4: Method Chaining dengan Prototype (Level 4 - Hard)
//Deskripsi: Buat objek BankAccount dengan properti saldo dan method untuk menyetor dan menarik uang. Implementasikan method chaining agar pemanggilan method dapat dilakukan secara berurutan.

function BankAccount(balance) {
  this.balance = balance;
}

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount;
  return this;
}

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount;
  return this;
}

BankAccount.prototype.getBalance = function () {
  console.log(this.balance);
  return this;
}

const account = new BankAccount(1000);

account.deposit(500).withdraw(200).getBalance();
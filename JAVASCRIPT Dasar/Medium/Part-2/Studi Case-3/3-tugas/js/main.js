// Studi Kasus 3: Bank Account (Level 3 - Medium)

let Account = {
  balance: 1000,
  deposite(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposite berhasil! Saldo sekarang: ${this.balance}`);
    } else {
      console.log('Jumlah deposit harus lebih besar dari 0');
    }
  },
  withdraw(amount) {
    if (amount > 0) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Penarikan berhasil! Saldo sekarang: ${this.balance}`);
      } else {
        console.log('Saldo tidak cukup untuk penarikan');
      }
    } else {
      console.log('Jumlah penarikan harus lebih besar dari 0');
    }
  },
};

console.log(Account);
Account.deposite(500);
console.log(Account);
Account.withdraw(200);
console.log(Account);
Account.withdraw(1000);

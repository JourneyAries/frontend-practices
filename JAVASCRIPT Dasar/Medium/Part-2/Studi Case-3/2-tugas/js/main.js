// Studi Kasus 2: Profil Pengguna (Level 2 - Easy)

let User = {
  'name': 'udin',
  'email': 'udinpertama@gmail.com',
  displayInfo() {
    console.log(`Nama: ${this.name}, Email: ${this.email}`);
  },
  updateEmail(newEmail) {
    this.email = newEmail;
  }
};

console.log(User);
User.displayInfo();
User.updateEmail('udinasli@gmail.com');
User.displayInfo();

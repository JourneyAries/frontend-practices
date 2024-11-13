//6. Memeriksa Bilangan Prima
//Buat fungsi isPrime(num) yang mengembalikan true jika bilangan tersebut adalah bilangan prima, dan false jika bukan.
//Contoh: isPrime(7) mengembalikan true.

function isPrime(num) {
  //bilangan yang hanya bisa di bagi oleh bilangan itu sendiri
  let newNum = '';
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      newNum += i;
      if (i < num) {
        newNum += ', ';
      }
    }
  }
  if (newNum.split(', ').length === 2) {
    return `bilangan tersebut prima! - [${newNum}]`;
  } else {
    return `bilangan tersebut BUKAN prima! - [${newNum}]`;
  }
}

console.log(isPrime(5));
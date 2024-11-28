//Math.sqrt()
//if()
//for()
let isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0) return false;
  }
  return true;
}

//for()
//if()
//push()
let findPrimes1 = limit => {
  let primes = [];
  for (let i = 2; i < limit; i++){
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

console.log(findPrimes1(10));

//forEach()
//Array.from()
//if()
//push()
let findPrimes2 = limit => {
  let primes = [];
  Array.from({ length: limit - 1 }, (_, index) => index + 1).forEach(index => {
    if (isPrime(index)) {
      primes.push(index);
    }
  });
  return primes;
}
console.log(findPrimes2(10));

//for(..of..)
//Array.from()
//if()
//push()
let findPrimes3 = limit => {
  let primes = [];
  const range = Array.from({ length: limit - 1 }, (_, index) => index + 1);
  for (let index of range) {
    if (isPrime(index)) {
      primes.push(index);
    }
  }
  return primes;
}
console.log(findPrimes3(10));

//reduce()
//Array.from()
//if()
//push()
let findPrimes4 = limit => {
  const range = Array.from({ length: limit - 1 }, (_, index) => index + 1);
  return range.reduce((primes, index) => {
    if (isPrime(index)) {
      primes.push(index);
    } 
    return primes;
  },[])
}
console.log(findPrimes4(10));

//filter()
//Array.from();
let findPrimes5 = limit => {
  const range = Array.from({ length: limit - 1 }, (_, index) => index + 1);
  return range.filter(isPrime);
}
console.log(findPrimes5(10));

//while()
//if()
//push()
let findPrimes6 = limit => {
  let primes = [];
  let i = 2;
  while (i < limit) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }
  return primes;
}
console.log(findPrimes6(10));

//map()
//Array.from()
//filter()
let findPrimes7 = limit => {
  let primes = [];
  const range = Array.from({ length: limit - 1 }, (_, index) => index + 1);
  return range.map(item => isPrime(item) ? item : null)
    .filter(item => item !== null);
}
console.log(findPrimes7(10));


//Algoritma 'Sieve Eratosthenes'
//Array()
//fill()
//nested for();
//if()
//map()
//filter()
//sieve eratosthenes
function findPrimes8(limit) {
  //Membuat Array untuk Menandai Angka
  const sieve = Array(limit).fill(true);
  //Menandai 0 dan 1 Bukan Prima
  sieve[0] = sieve[1] = false;
  //Mulai Mencoret Bilangan yang Bukan Prima
  for (let i = 2; i * i < limit; i++){
    if (sieve[i]) {
      for (let j = i * i; j < limit; j += i){
         //Loop Untuk Coret Kelipatan Bilangan
        sieve[j] = false 
      }
    }
  }
  //Hasil Akhir
  return sieve.map((isPrime, num) => isPrime ? num : null)
    .filter(num => num !== null);
}
console.log(findPrimes8(10));

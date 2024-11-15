//14. Temukan Bilangan Prima dalam Range
//Fungsi: findPrimes(limit)
//Parameter: limit (integer)
//Hint: Buat fungsi untuk cek prima, loop hingga limit.
//Contoh Pemanggilan: findPrimes(10) // [2, 3, 5, 7]

function isPrimes(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//for loop
function findPrimes1(limit) {
  let primes = [];
  for (let i = 2; i < limit; i++){
    if (isPrimes(i)) {
      primes.push(i);
    }
  }
  return primes;
}

//forEach
function findPrimes2(limit) {
  let primes = [];
  Array.from({length: limit - 1}, (_, i) => i + 2).forEach(index => {
    if (isPrimes(index)) {
      primes.push(index);
    }
  }, []);
  return primes;
}

//for of  
function findPrimes3(limit) {
  let primes = [];
  const range = Array.from({ length: limit - 1 }, (_, index) => index + 2);
  for (let index of range){
    if (isPrimes(index)) {
      primes.push(index);
    }
  }
  return primes;
}

//reduce
function findPrimes4(limit) {
  let primes = [];

  return Array.from({ length: limit - 1 }, (_, i) => i + 2)
    .reduce((primes, num) => {
      if (isPrimes(num)) primes.push(num);
      return primes;
  }, []);
}


//filter
function findPrimes5(limit) {
  return Array.from({ length: limit - 1 }, (_, i) => i + 2)
    .filter(isPrimes);
}


//while
function findPrimes6(limit) {
  let primes = [];
  let i = 2;
  while (i < limit) {
    if (isPrimes(i)) {
      primes.push(i);
    }
    i++;
  }

  return primes;
}

//map dan filter
function findPrimes7(limit) {
  let primes = [];
  return Array.from({ length: limit - 1 }, (_, i) => i + 2)
    .map(num => isPrimes(num) ? num : null)
    .filter(num => num !== null);
}

//sieve eratosthenes
function findPrimes8(limit) {
  let primes = [];
  //Membuat Array untuk Menandai Angka
  const sieve = Array(limit).fill(0);
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

console.log(findPrimes1(10));
console.log(findPrimes2(10));
console.log(findPrimes3(10));
console.log(findPrimes4(10));
console.log(findPrimes5(10));
console.log(findPrimes6(10));
console.log(findPrimes7(10));
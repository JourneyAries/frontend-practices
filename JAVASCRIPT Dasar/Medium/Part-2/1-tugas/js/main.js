//1. Mencari Angka Prima dalam Rentang
//Buat fungsi findPrimesInRange(start, end) yang menerima dua angka, start dan end, dan mengembalikan array angka prima yang berada dalam rentang tersebut.

function findPrimesInRange(start, end) {
  let primes = [];

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
      if(num % i === 0) return false
    }
    return true;
  }

  for (let i = start; i <= end; i++){
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes;
}

console.log(findPrimesInRange(10, 20));
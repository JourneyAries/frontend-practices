function hitungFibonacci(nilai) {
  let deretFibonacci = [0, 1];

  for (let i = 2; i < nilai; i++){
    deretFibonacci[i] = deretFibonacci[i - 1] + deretFibonacci[i - 2];
  }
  return deretFibonacci.slice(0, nilai);
}

console.log(hitungFibonacci(5));
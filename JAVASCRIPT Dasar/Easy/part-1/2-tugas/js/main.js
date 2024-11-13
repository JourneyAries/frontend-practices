//2. Menghitung Faktorial
//Fungsi: factorial(n)
//Parameter: n (integer)
//Hint: Loop dari 1 ke n dan kalikan semua angka.
//Contoh Pemanggilan: factorial(5) // 120

function factorial(num) {
  let nums = [];
  let result = 1;

  if (num <= 1) return result;
  for (let i = num; i > 0; i--) {
    result *= i;
    nums += i;
    if (i > 1) {
      nums += ' x ';
    }
  }

  return `${num}! = ${nums} = ${result}`;
}

console.log(factorial(5));

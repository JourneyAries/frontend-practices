//21. Mencari Bilangan Fibonacci ke-N
//Buat fungsi fibonacci(n) yang mengembalikan angka ke-n dalam urutan Fibonacci.
//Contoh: fibonacci(5) mengembalikan 5.

function fibonacci(num) {
  if (num <= 1) { //base case
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));
//20. Membuat Bilangan Faktorial
//Buat fungsi factorial(num) yang menerima bilangan num dan mengembalikan faktorial dari angka tersebut.
//Contoh: factorial(5) mengembalikan 120.


function factorial(num) {
  let result = 1;
  let process = '';
  for (let i = num; i > 0; i--){
    result *= i;
    process += i;
    if (i > 1) {
      process += ' x ';
    }
  }
  return `${num}! =  ${process} = ${result}`;
}

console.log(factorial(5));
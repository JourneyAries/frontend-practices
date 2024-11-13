//4. Menemukan Bilangan Ganjil dan Genap
//Buat fungsi oddOrEven(num) yang menerima sebuah bilangan bulat dan mengembalikan string "odd" jika bilangan tersebut ganjil dan "even" jika bilangan tersebut genap.
//Contoh: oddOrEven(3) mengembalikan "odd".

function oddOrEven(value) {
  return value % 2 == 0? "even" : "odd";
}

console.log(oddOrEven(3));
//23. Menjumlahkan Bilangan dalam String
//Buat fungsi sumNumbersInString(str) yang menemukan dan menjumlahkan semua bilangan dalam string.

function sumNumbersInString(str) {
  const numbers = str.match(/\d+/g);
  if (!numbers) return 0;
  return numbers.reduce((sum, num) => sum + Number(num), 0);
}

console.log(sumNumbersInString("I have 2 apples and 3 oranges."))
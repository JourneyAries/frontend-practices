// 22. Kalkulasi Jumlah Ganjil
// Buat fungsi countOddNumbers(numbers) untuk menghitung jumlah angka ganjil dalam array.

// Hint:
// Filter angka ganjil menggunakan modulo (%).
// Return panjang array hasil filter.

// console.log(countOddNumbers([1, 2, 3, 4, 5])); Output: 3

//modulo dan filter
function countOddNumbers1(numbers) {
  const oddNumbers = numbers.filter(number => number % 2 !== 0);
  
  return oddNumbers.length;
}

console.log(countOddNumbers1([1, 2, 3, 4, 5]));


//reduce
function countOddNumbers(numbers) {
  return numbers.reduce((count, number) => {
    return number % 2 !== 0 ? count + 1 : count;
  }, 0);
}

console.log(countOddNumbers([1, 2, 3, 4, 5]));

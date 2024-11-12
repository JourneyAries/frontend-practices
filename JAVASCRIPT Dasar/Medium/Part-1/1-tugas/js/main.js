//1. Filter Angka Ganjil dan Genap
//Buat fungsi filterOddEven(numbers) yang menerima array numbers dan mengembalikan objek dengan dua properti: odd berisi angka ganjil dan even berisi angka genap.

function filterOddEven(nums) {
  const result = {
    odd: [],
    even: []
  }

  nums.forEach(num => {
    if (num % 2 == 0) {
      result.even.push(num);
    } else {
      result.odd.push(num);
    }
  });

  return result;
}


console.log(filterOddEven([1, 2, 3, 4, 5]));
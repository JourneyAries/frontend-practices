//17. Mengelompokkan Angka Berdasarkan Kelipatan
//Buat fungsi groupByMultiples(arr, divisor) yang menerima array arr dan divisor, dan mengembalikan objek yang mengelompokkan angka berdasarkan kelipatan divisor.

function groupByMultiples(arr, divisor) {
  const result = {
    [divisor]: [],
    others: []
  }

  arr.forEach(num => {
    if (num % divisor === 0) {
      result[divisor].push(num);
    } else {
      result.others.push(num);
    }
  });

  return result;
}

console.log(groupByMultiples([1, 2, 3, 4, 5, 6], 3));
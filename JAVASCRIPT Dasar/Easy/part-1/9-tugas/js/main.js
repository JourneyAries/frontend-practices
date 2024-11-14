//9. Deret Fibonacci hingga N
//Fungsi: fibonacciSeries(n)
//Parameter: n (integer)
//Hint: Tambahkan dua angka terakhir sampai mencapai n.
//Contoh Pemanggilan: fibonacciSeries(5) // [0, 1, 1, 2, 3]


//for loop 
function fibonacciSeries1(num) {
  let result = [];
  if (num === 0) return result;
  if (num === 1) return [1];

  result = [0, 1];

  if (num >= 2) {
    for (let i = 2; i < num; i++){
      result.push(((result[i - 1]) + (result[i -2])));
    }
  }
  return result;
}

//recursive
function fibonacciSeries2(num, result = [0, 1]) {
  if (num === 0) return [];
  if (num === 1) return [1];
  if (num === 2) return result;

  result.push(result[result.length - 1] + result[result.length - 2]);
  return fibonacciSeries2(num - 1, result)
}

//reduce
function fibonacciSeries3(num) {
  return Array(num).fill(0).reduce((acc, _, index) => {
    if (index === 0) return [0];
    if (index === 1) return [...acc, 1];
    return [...acc, acc[index - 1] + acc[index - 2]];
  }, []);
}

//while 
function fibonacciSeries4(num) {
  let result = [0, 1];
  let i = 2;

  if(num === 0) return []
  while (i < num) {
    result.push(result[i - 1] + result[i - 2]);
    i++;
  }

  return result;
}

console.log(fibonacciSeries1(5));
console.log(fibonacciSeries2(5));
console.log(fibonacciSeries3(5));
console.log(fibonacciSeries4(5));
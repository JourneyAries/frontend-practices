//for()
//if()
//for()
//push()
let fibonacciSeries1 = num => {
  let result = [];
  if (num === 0) return result;
  if (num === 1) return [1];

  result = [0, 1];
  if (num >= 2) {
    for (let i = 2; i < num; i++){
      result.push((result[i - 1]) + (result[i - 2]));
    }
  }
  return result;
}
console.log(fibonacciSeries1(5));

//recursive()
//if()
let fibonacciSeries2 = (num, result = [0,1]) => {
  if (num === 0) return [];
  if (num === 1) return [1];
  if (num === 2) return result;

  result.push(result[result.length - 1] + result[result.length - 2]);
  return fibonacciSeries2(num - 1, result);
}
console.log(fibonacciSeries2(5));

//while()
//if()
//push()
let fibonacciSeries3 = num => {
  let result = [];
  if (num === 0) return result;
  if (num === 1) return [1];
  result = [0, 1];
  
  if (num >= 2) {
    let i = 2;
    while (i < num) {
      result.push((result[i - 1]) + (result[i - 2]));
      i++;
    }
  }
  return result;
}
console.log(fibonacciSeries3(5));

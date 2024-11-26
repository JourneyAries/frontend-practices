const factorial = num => {
  let result = 1;
  let nums = [];

  if (num <= 1) return result;
  for (let i = num; i > 0; i--){
    result *= i;
    nums += i;
    if (i > 1) {
      nums += ' * ';
    }
  }
  return `${num}! = ${nums} = ${result}`;
}

console.log(factorial(5));
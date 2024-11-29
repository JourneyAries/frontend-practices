//for()
let sumInRange1 = (start, end) => {
  let result = 0;
  for (let i = start; i <= end; i++){
    result += i;
  }
  return result;
} 
console.log(sumInRange1(1, 5));

//forEach()
//Array.from()
let sumInRange2 = (start, end) => {
  let result = 0;

  const arr = Array.from({ length: end }, (_, index) => index + start);
  arr.forEach(item => {
    result += item;
  })
  return result;
}
console.log(sumInRange2(1, 5));

//for(..of..)
//Array.from()
let sumInRange3 = (start, end) => {
  let result = 0;
  
  const arr = Array.from({ length: end }, (_, item) => item + start);
  for (let item of arr) {
    result += item;
  }
  return result;
}
console.log(sumInRange3(1, 5));

//reduce()
//Array.from()
let sumInRange4 = (start, end) => {
  const arr = Array.from({ length: end }, (_, item) => item + start);
  return arr.reduce((result, item) => result + item, 0);
}
console.log(sumInRange4(1, 5));

//Rumus Aritmatika
let sumInRange5 = (start, end) => {
  return (end * (start + end) / 2);
}
console.log(sumInRange5(1, 5));

//while()
const sumInRange6 = (start, end) => {
  let result = 0;
  let i = start;

  while (i <= end) {
    result += i;
    i++;
  }
  return result;
}
console.log(sumInRange6(1, 5));


//spread()
//map()
//reduce()
const sumInRange7 = (start, end) => {
  return [...Array(end)]
    .map((_, i) => i + start)
    .reduce((result, item) => result + item, 0);
}
console.log(sumInRange7(1, 5));

//forEach()
//spread...
const sumInRange8 = (start, end) => {
  let result = 0;
  [...Array(end)].forEach((_, i) => {
    result += i + start;
  });
  return result;
}
console.log(sumInRange8(1, 5));
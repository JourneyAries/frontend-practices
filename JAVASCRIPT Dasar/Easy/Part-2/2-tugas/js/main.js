//2. Jumlah Semua Angka dalam Range
//Fungsi: sumInRange(start, end)
//Parameter: start (integer), end (integer)
//Hint: Loop dari start hingga end dan tambahkan semua angka.
//Contoh Pemanggilan: sumInRange(1, 5) // 15

//for loop
const sumInRange1 = (start, end) => {
  let result = 0;
  for (let i = start; i <= end; i++){
    result += i;
  }
  return result;
}

//forEach
const sumInRange2 = (start, end) => {
  let result = 0;
  const arr = Array.from({length: end}, (_, i) => i + start);

  arr.forEach(item => {
    result += item;
  })

  return result;
}

//for of
const sumInRange3 = (start, end) => {
  let result = 0;
  const arr = Array.from({ length: end }, (_, i) => i + start);

  for (let item of arr) {
    result += item;
  }

  return result;
}

//reduce
const sumInRange4 = (start, end) => {
  const arr = Array.from({ length: end }, (_, i) => i + start);

  return arr.reduce((result, item) => {
    return result += item;
  },0);
}

//rumus arimatika
const sumInRange5 = (start, end) => {
  return (end * (start + end)) / 2;
}

//while
const sumInRange6 = (start, end) => {
  let result = 0;
  let i = start;

  while (i <= end) {
    result += i;
    i++;
  }
  return result;
}

//map reduce
const sumInRange7 = (start, end) => {
  return [...Array(end)]
    .map((_, i) => i + start)
    .reduce((result, item) => result + item, 0);
}

//forEach tanpa Array
const sumInRange8 = (start, end) => {
  let result = 0;
  [...Array(end)].forEach((_, i) => {
    result += i + start;
  });
  return result;
}

console.log(sumInRange1(1, 5));
console.log(sumInRange2(1, 5));
console.log(sumInRange3(1, 5));
console.log(sumInRange4(1, 5));
console.log(sumInRange5(1, 5));
console.log(sumInRange6(1, 5));
console.log(sumInRange7(1, 5));
console.log(sumInRange8(1, 5));
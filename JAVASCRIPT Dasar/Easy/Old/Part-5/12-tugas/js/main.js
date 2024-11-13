//12. Lompat Kelipatan
//Buat fungsi jumpMultiples(start, end, step) yang menghasilkan array dari start ke end dengan kelipatan step.

function jumpMultiples(start, end, step) {
  let result = [];

  for (let i = start; i <= end; i += step){
    result.push(i);
  }

  return result;
}

console.log(jumpMultiples(0, 10, 2));

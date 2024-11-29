//if()
let isPositiveOrNegative1 = num => {
  if (num > 0) return 'positive';
  if (num < 0) return 'negative';
  return 'zero';
}
console.log(isPositiveOrNegative1(-5));

//ternary
let isPositiveOrNegative2 = num => {
  return num === 0 ? 'zero' : (num > 0 ? 'positive' : 'negatif');
}
console.log(isPositiveOrNegative2(-5));

//switch
const isPositiveOrNegative3 = num => {
  switch (true) {
    case num < 0:
      return "Negative";
    case num > 0:
      return "Positive";
    default:
      return "Zero";
  }
}
console.log(isPositiveOrNegative3(-5));

//Math.sign()
//if()
const isPositiveOrNegative4 = num => {
  const sign = Math.sign(num);
  if (sign === -1) return "Negative";
  if (sign === 1) return "Positive";
  return "Zero";
}
console.log(isPositiveOrNegative4(-5));

//Object{}
//Math.sign()
const isPositiveOrNegative5 = num => {
  const result = {
    "-1": "Negative",
    "1": "Positive"
  }
  return result[Math.sign(num)] || "Zero";
}
console.log(isPositiveOrNegative5(-5));

//Ternary
//Lookup Table []
//Not !
//Type Coercion +
const isPositiveOrNegative6 = num => {
  const states = ["Negative", "Positive"];
  return num === 0 ? "Zero" : states[+!(num < 0)];
}
console.log(isPositiveOrNegative6(-5));
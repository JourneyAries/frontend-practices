//for()
let totalPrice1 = prices => {
  let result = 0;
  for (let i = 0; i < prices.length; i++){
    result += prices[i];
  }
  return result;
}
console.log(totalPrice1([10, 20, 30]));

//forEach()
let totalPrice2 = prices => {
  let result = 0;
  prices.forEach(item => {
    result += item;
  })
  return result;
}
console.log(totalPrice2([10, 20, 30]));

//for(..of..)
let totalPrice3 = prices => {
  let result = 0;
  for (let item of prices) {
    result += item;
  }
  return result;
}
console.log(totalPrice3([10, 20, 30]));

//reduce()
let totalPrice4 = prices => {
  return prices.reduce((result, item) => result + item, 0);
}
console.log(totalPrice4([10, 20, 30]));

//Function Generator*
function* totalPrice5(prices) {
  let result = 0;
  for (let item of prices) {
    result += item;
    yield result;
  }
}
const prices = [10, 20, 30];
const generator = totalPrice5(prices);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
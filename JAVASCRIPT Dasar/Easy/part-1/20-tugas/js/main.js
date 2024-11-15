//20. Menghitung Total Harga Barang
//Fungsi: totalPrice(prices)
//Parameter: prices (array of integers)
//Hint: Loop semua harga dan jumlahkan.
//Contoh Pemanggilan: totalPrice([10, 20, 30]) // 60

//for loop
function totalPrice1(prices) {
  let result = 0;
  for (let i = 0; i < prices.length; i++){
    result += prices[i];
  }
  return result;
}

//forEach
function totalPrice2(prices) {
  let result = 0;
  prices.forEach(item => {
    result += item;
  })

  return result;
}

//for of
function totalPrice3(prices) {
  let result = 0;
  for (let item of prices) {
    result += item;
  }

  return result;
}

//reduce
function totalPrice4(prices) {
  return prices.reduce((result, item) => result + item, 0);
}

function* totalPrice5(prices) {
  let result = 0;
  for (let item of prices) {
    result += item;
    yield result;
  }
}

console.log(totalPrice1([10, 20, 30]));
console.log(totalPrice2([10, 20, 30]));
console.log(totalPrice3([10, 20, 30]));
console.log(totalPrice4([10, 20, 30]));

const prices = [10, 20, 30];
const generator = totalPrice5(prices);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
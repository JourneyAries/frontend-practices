// Tugas: Gunakan closure untuk menyimpan nilai tetap

function createMultiply(x) {
  return function (y) {
    return x * y;
  }
}

const multiplyBy2 = createMultiply(2);
console.log(multiplyBy2(5));
//11. Cek Apakah Semua Angka di Array Genap
//Fungsi: allEven(arr)
//Parameter: arr (array of integers)
//Hint: Loop atau gunakan .every untuk cek elemen.
//Contoh Pemanggilan: allEven([2, 4, 6]) // true

//loop
function allEven1(arr) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

//every
function allEven2(arr) {
  return arr.every(item => item % 2 === 0);
}

//filter
function allEven3(arr) {
  return arr.filter(item => item % 2 !== 0).length === 0;
}

//reduce
function allEven4(arr) {
  return arr.reduce((result, item) => result && item % 2 === 0, true);
}

//some
function allEven5(arr) {
  return !arr.some(item => item % 2 !== 0);
}


console.log(allEven1([2, 4, 6]));
console.log(allEven2([2, 4, 6]));
console.log(allEven3([2, 4, 6]));
console.log(allEven4([2, 4, 6]));
console.log(allEven5([2, 4, 6]));
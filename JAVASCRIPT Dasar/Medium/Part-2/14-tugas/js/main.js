//14. Mencari Elemen yang Tidak Berpasangan
//Buat fungsi findUnpaired(arr) yang menerima array arr dan mengembalikan elemen yang tidak memiliki pasangan (elemen yang hanya muncul sekali).


function findUnpaired(arr) {
  const frequency = {}

  arr.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  return Object.keys(frequency).filter(key => frequency[key] === 1).map(Number);
}

console.log(findUnpaired([1, 2, 3, 2, 3]));



// 18. Menemukan Nilai Unik dalam Array
// Buat fungsi findUnique(arr) yang menerima array dan mengembalikan elemen yang hanya muncul sekali.
// Contoh: findUnique([1, 2, 2, 3, 3, 4]) mengembalikan [1, 4].

function findUnique(arr) {
  let frequency = {};

  for (let i = 0; i < arr.length; i++){
    if (frequency[arr[i]] === undefined) {
      frequency[arr[i]] = 1;
    } else {
      frequency[arr[i]] += 1;
    }
  }

  let uniqueElements = [];
  for (let key in frequency) { 
    if (frequency[key] == 1) { 
      uniqueElements.push(parseInt(key));
    }
  }
  return uniqueElements;
}

console.log(findUnique([1, 2, 2, 3, 3, 4]));

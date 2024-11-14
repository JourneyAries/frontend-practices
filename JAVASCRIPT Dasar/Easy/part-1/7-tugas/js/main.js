//7. Menghapus Duplikat dalam Array
//Fungsi: removeDuplicates(arr)
//Parameter: arr (array)
//Hint: Gunakan Set atau cek manual dengan array baru.
//Contoh Pemanggilan: removeDuplicates([1, 2, 2, 3]) // [1, 2, 3]

//Spread Operator membuat elemen dalam Set menjadi array baru
function removeDuplicates1(arr) {
  return [...new Set(arr)]; 
}

//Array.from() membuat array dari iterable (Set)
function removeDuplicates2(arr) {
  return Array.from(new Set(arr));
}

// For loop, includes, push - Membuat array baru dengan cek satu persatu index
function removeDuplicates3(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++){
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

//forEach, includes, push - membuat array baru dengan cek satu persatu 
function removeDuplicates4(arr) {
  let newArr = [];
  arr.forEach(i => {
    if (!newArr.includes(i)) {
      newArr.push(i);
    }
  })
  return newArr;
}

//filter() & indexOf()
// Dengan filter(), kita bisa memeriksa apakah suatu elemen adalah elemen pertama kali muncul di array. Ini bisa dilakukan dengan memeriksa apakah indexOf elemen tersebut sama dengan indeks iterasi filter.
function removeDuplicates5(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

//reduce - membangun array baru (acc) dengan ngecek apakah elemen yang sedang diproses sudah ada didalamnya menggunakan includes
function removeDuplicates6(arr) {
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) acc.push(item);
    return acc;
  }, []);
}

//Map() - untuk melacak elemen yang sudah pernah muncul, cara ini sedikit lebih cepat. karena pencarian dalam Map() umumnya lebih efisien dibandingkan Array.includes();
function removeDuplicates7(arr) {
  const seen = new Map();
  const result = [];

  arr.forEach(item => {
    if (!seen.has(item)) {
      seen.set(item, true);
      result.push(item);
    }
  });
  
  return result;
}

console.log(removeDuplicates1([1, 2, 2, 3]));
console.log(removeDuplicates2([1, 2, 2, 3]));
console.log(removeDuplicates3([1, 2, 2, 3]));
console.log(removeDuplicates4([1, 2, 2, 3]));
console.log(removeDuplicates5([1, 2, 2, 3]));
console.log(removeDuplicates6([1, 2, 2, 3]));
console.log(removeDuplicates7([1, 2, 2, 3]));
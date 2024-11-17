//24. Menghapus Elemen dalam Array
//Fungsi: removeElement(arr, target)
//Parameter: arr (array), target (any)
//Hint: Gunakan metode .filter.
//Contoh Pemanggilan: removeElement([1, 2, 3], 2) // [1, 3]

//filter
function removeElement(arr, target) {
return arr.filter(item => item !== target)
}

//for loop
function removeElement2(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== target) {
      result.push(arr[i]);
    }
  }
  return result;
}

//splice
function removeElement3(arr, target) {
  const index = arr.indexOf(target);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}

//map
function removeElement4(arr, target) {
  return arr.map(item => item === target ? null : item).filter(item => item !== null);
}

console.log(removeElement([1, 2, 3], 2));
console.log(removeElement2([1, 2, 3], 2));
console.log(removeElement3([1, 2, 3], 2));
console.log(removeElement4([1, 2, 3], 2));
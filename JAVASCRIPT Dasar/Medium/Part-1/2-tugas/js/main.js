//2. Menghapus Duplikat
//Buat fungsi removeDuplicates(arr) yang menerima array arr dan mengembalikan array baru tanpa elemen duplikat.

function removeDuplicates(arr) {
  let newArr = [];
  arr.forEach(num => {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  });

  return newArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
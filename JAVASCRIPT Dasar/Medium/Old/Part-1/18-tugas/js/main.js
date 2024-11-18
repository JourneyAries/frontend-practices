//18. Menghapus Nilai Tertentu dari Array
//Buat fungsi removeValue(arr, value) yang menghapus semua kemunculan value dari array arr.

function removeValue(arr, value) {
  return arr.filter(e => e !== value);
}

console.log(removeValue([1, 2, 3, 2, 4], 2));
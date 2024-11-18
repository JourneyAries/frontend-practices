//19. Menyaring Nilai Berdasarkan Fungsi
//Buat fungsi filterByFunction(arr, fn) yang menerima array arr dan fungsi fn. Fungsi ini akan mengembalikan elemen-elemen yang lolos filter berdasarkan fungsi fn.

function filterByFunction(arr, fn) {
  return arr.filter(fn);
}

console.log(filterByFunction([1, 2, 3, 4], (num) => num > 2));
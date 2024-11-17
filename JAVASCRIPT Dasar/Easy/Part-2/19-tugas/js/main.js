//19. Cek Apakah Array Simetris
//Fungsi: isSymmetric(arr)
//Parameter: arr (array)
//Hint: Bandingkan array asli dengan array yang dibalik.
//Contoh Pemanggilan: isSymmetric([1, 2, 1]) // true

function isSymmetric(arr) {
  let reversedArr = arr.slice().reverse();
  return arr.join('') === reversedArr.join('');
}

console.log(isSymmetric([1, 2, 1]));
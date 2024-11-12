//4. Cek Pola Palindrom pada Array
//Buat fungsi isPalindromeArray(arr) yang menerima array arr dan mengembalikan true jika array tersebut adalah palindrom (terbalik tetap sama), atau false jika tidak.

function isPalindromeArray(arr) {
  return arr.join('') == arr.slice().reverse().join('');
}

console.log(isPalindromeArray([1, 2, 3, 2, 1]));
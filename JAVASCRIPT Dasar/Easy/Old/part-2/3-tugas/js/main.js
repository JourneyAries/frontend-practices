//3. Menghitung Vokal dalam Strin
//Buat fungsi countVowels(str) yang menerima sebuah string dan mengembalikan jumlah huruf vokal (a, e, i, o, u) dalam string tersebut.
//Contoh: countVowels("javascript") mengembalikan 3.

function countVowels(str) {
  let totalVowels = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o'){
      totalVowels++;
    }
  }
  return totalVowels;
}

console.log(countVowels('javascript'));

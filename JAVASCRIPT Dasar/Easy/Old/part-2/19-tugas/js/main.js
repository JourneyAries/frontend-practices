//19. Menghitung Huruf Konsonan dalam String
//Buat fungsi countConsonants(str) yang menerima sebuah string dan mengembalikan jumlah huruf konsonan dalam string tersebut.
//Contoh: countConsonants("javascript") mengembalikan 7.

function countConsonants(str) { 
  let totalConsonants = 0;
  for (let i = 0; i < str.length; i++) { 
    if (str[i] != 'a' && str[i] != 'i' && str[i] != 'u' && str[i] != 'e' && str[i] != 'o') { 
      totalConsonants += 1;
    }
  }
  return totalConsonants;
}

console.log(countConsonants("javascript"));
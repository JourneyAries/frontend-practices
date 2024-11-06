//20. Menggunakan String.prototype.charAt()
//Buat fungsi getMiddleCharacter(str) yang mengembalikan karakter di tengah str. Jika panjang str genap, kembalikan dua karakter tengah.
//Contoh: getMiddleCharacter("test") mengembalikan "es".

function getMiddleCharacter(str) {
  let middleChar = Math.floor(str.length / 2);

  if (str.length % 2 == 0) {
    return str.charAt(middleChar - 1) + str.charAt(middleChar);
  } else {
    return str.charAt(middleChar);
  }
}

console.log(getMiddleCharacter("test"));
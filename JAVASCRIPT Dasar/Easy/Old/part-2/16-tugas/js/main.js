//16. Menghitung Frekuensi Huruf
//Buat fungsi countCharacterFrequency(str) yang menerima sebuah string dan mengembalikan objek dengan setiap karakter dan frekuensinya.
//Contoh: countCharacterFrequency("hello") mengembalikan { h: 1, e: 1, l: 2, o: 1 }.

function countCharacterFrequency(str) {
  let frequency = {};
  for (let i = 0; i < str.length; i++) { 
    let char = str[i];

    if (frequency[char] === undefined) { 
      frequency[char] = 1;
    } else {
      frequency[char] += 1;
    }
  }
  return frequency;
}

console.log(countCharacterFrequency("hello"));
//24. Menghitung Panjang Rata-rata Kata dalam Kalimat
//Buat fungsi averageWordLength(sentence) yang menghitung panjang rata-rata kata dalam kalimat.

function averageWordLength(sentence) {
  const words = sentence.split(' ');
  const totalLength = words.reduce((sum, word) => sum + word.length, 0);
  return totalLength / words.length;
}

console.log(averageWordLength("I love JavaScript"));
//5. Menggunakan String.prototype.split() dan Array.prototype.reverse()
//Buat fungsi reverseWords(str) yang menerima kalimat str dan membalik urutan kata dalam kalimat tersebut.
//Contoh: reverseWords("I love coding") mengembalikan "coding love I".

function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords("I love coding"));
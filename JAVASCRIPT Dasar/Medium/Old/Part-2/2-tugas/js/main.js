//4. Membalik Urutan Kata dalam Kalimat
//Buat fungsi reverseWordsInSentence(sentence) yang menerima sebuah kalimat dan mengembalikan kalimat yang sama tetapi dengan urutan kata yang dibalik.

function reverseWordsInSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseWordsInSentence("Hello World!"));
//19. Mengurutkan Kata dalam Kalimat Berdasarkan Panjang
//Buat fungsi sortWordsByLength(sentence) yang mengurutkan kata-kata dalam string sentence berdasarkan panjangnya.

function sortWordsByLength(sentence) {
  return sentence.split(' ').sort((a, b) => a.length - b.length).join(' ');
}

console.log(sortWordsByLength("The quick brown fox jumps over the lazy dog"));
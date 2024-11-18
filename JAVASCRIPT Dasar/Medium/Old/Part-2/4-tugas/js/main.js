//7. Mengonversi String ke Array of Words
//Buat fungsi stringToWords(str) yang menerima string str dan mengonversinya menjadi array yang berisi kata-kata yang ada di dalam string tersebut.

function stringToWords(str) {
  return str.split(' ');
}

console.log(stringToWords("The quick brown fox"));
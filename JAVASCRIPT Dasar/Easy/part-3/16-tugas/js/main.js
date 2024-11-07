//16. Menggunakan Array.prototype.join()
//Buat fungsi joinWords(arr) yang menggabungkan array arr menjadi string dengan kata-kata dipisahkan oleh spasi.
//Contoh: joinWords(["hello", "world"]) mengembalikan "hello world".

function joinWords(arr) {
  return arr.join(" ");
}

console.log(joinWords(["hello", "world"]));

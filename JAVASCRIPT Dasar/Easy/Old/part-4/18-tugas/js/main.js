//18. Menggunakan String.prototype.repeat()
//Buat fungsi repeatCharacter(char, times) yang mengembalikan char diulang sebanyak times.
//Contoh: repeatCharacter("*", 5) mengembalikan "*****".

function repeatCharacter(char, times) {
  return char.repeat(times);
}

console.log(repeatCharacter('*', 5));
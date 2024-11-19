// 10. Hitung Kemunculan Kata
// Buat fungsi countWordFrequency(text) untuk menghitung jumlah kemunculan tiap kata.

// Hint:
// Pisahkan string menjadi array kata.
// Hitung frekuensi setiap kata.

// console.log(countWordFrequency("apple banana apple orange banana orange orange"));
// Output: { apple: 2, banana: 2, orange: 3 }

//object dan loop
function countWordFrequency1(text) {
  const words = text.split(' ');
  let frequency = {};

  for (let word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }

  return frequency;
}

//array reduce
function countWordFrequency2(text) {
  return text.split(' ').reduce((frequency, word) => {
    frequency[word] = (frequency[word] || 0) + 1;
    return frequency;
  }, {});
}

//map
function countWordFrequency3(text) {
  const words = text.split(' ');
  const frequency = new Map();

  for (let word of words) {
    frequency.set(word, (frequency.get(word) || 0) + 1);
  }

  return Object.fromEntries(frequency);
}


console.log(countWordFrequency1("apple banana apple orange banana orange orange"))
console.log(countWordFrequency2("apple banana apple orange banana orange orange"))
console.log(countWordFrequency3("apple banana apple orange banana orange orange"))
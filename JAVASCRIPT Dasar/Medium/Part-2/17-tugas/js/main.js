//17. Menghitung Frekuensi Kemunculan Elemen
//Buat fungsi countFrequency(arr) yang mengembalikan objek yang berisi frekuensi kemunculan setiap elemen dalam array.

function countFrequency(arr) {
  const frequency = {};

  arr.forEach(element => {
    frequency[element] = (frequency[element] || 0) + 1;
  })

  return frequency;
}

console.log(countFrequency([1, 2, 2, 3, 3, 3]));
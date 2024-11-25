// Studi Kasus 2: Perbandingan Objek (Level 2 - Easy)
// Deskripsi: Bandingkan dua objek yang memiliki properti yang sama, namun objek tersebut adalah referensi yang berbeda.

const person1 = { name: "John", age: 30 };
const person2 = { name: "John", age: 30 };

function compareObjects(obj1, obj2) {
  console.log(obj1 == obj2);  // false (karena referensi berbeda)
  console.log(obj1 === obj2); // false (karena referensi berbeda)
}

compareObjects(person1, person2);

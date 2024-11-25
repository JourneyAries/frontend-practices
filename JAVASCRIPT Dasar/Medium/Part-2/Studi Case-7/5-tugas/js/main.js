//Studi Kasus 5: Spread Operator untuk Menggabungkan dan Mengubah Object (Level 5 - Very Hard)
//Deskripsi: Gunakan spread operator untuk menggabungkan dua objek, di mana objek kedua dapat menimpa properti yang sama pada objek pertama.

function mergeObjects(obj1, obj2) {
  const merged = { ...obj1, ...obj2 };
  return merged;
}

const obj1 = { name: "Alice", age: 25, country: "USA" };
const obj2 = { age: 30, city: "New York" };

const mergedObj = mergeObjects(obj1, obj2);

console.log(mergedObj);
// Studi Kasus 3: Perbedaan antara Object.freeze() dan Object.seal() (Level 3 - Medium)
// Deskripsi: Bandingkan perbedaan antara Object.freeze() dan Object.seal() pada objek yang sama.

function freezeAndSealObject(obj) {
  // Percobaan dengan Object.freeze()
  Object.freeze(obj);
  obj.year = 2021;  // Tidak bisa merubah nilai year
  obj.genre = "Programming";  // Tidak bisa menambah properti baru

  console.log("After freeze:", obj);  // Output: { title: "JavaScript", author: "John Doe", year: 2020 }

  // Percobaan dengan Object.seal()
  Object.seal(obj);
  obj.year = 2021;  // Bisa merubah nilai year
  obj.genre = "Programming";  // Tidak bisa menambah properti baru

  console.log("After seal:", obj);  // Output: { title: "JavaScript", author: "John Doe", year: 2021 }
}

const book = { title: "JavaScript", author: "John Doe", year: 2020 };
freezeAndSealObject(book);

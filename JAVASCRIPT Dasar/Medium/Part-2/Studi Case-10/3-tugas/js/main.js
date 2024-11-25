// Studi Kasus 3: Menyalin Objek dengan Object.assign() dan Deep Copy (Level 3 - Medium)
// Deskripsi: Buat salinan objek yang dalam (deep copy) menggunakan teknik Object.assign() dan menggunakan metode alternatif.

const product = { name: "Laptop", specs: { color: "Silver", price: 1200 } };

function copyObjects(product) {
  // Membuat shallow copy menggunakan Object.assign()
  const shallowCopy = Object.assign({}, product);
  
  // Membuat deep copy menggunakan JSON.parse() dan JSON.stringify()
  const deepCopy = JSON.parse(JSON.stringify(product));

  // Mengubah harga di shallow copy
  shallowCopy.specs.price = 1000;
  
  // Mengubah harga di deep copy
  deepCopy.specs.price = 900;

  // Menampilkan hasil untuk membandingkan perubahan
  console.log("Original Product Price: ", product.specs.price); // Output: 1000
  console.log("Shallow Copy Price: ", shallowCopy.specs.price);  // Output: 1000
  console.log("Deep Copy Price: ", deepCopy.specs.price); // Output: 900
}

copyObjects(product);

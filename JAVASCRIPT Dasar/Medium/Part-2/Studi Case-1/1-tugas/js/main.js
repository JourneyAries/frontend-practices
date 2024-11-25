// Soal 1: Fungsi untuk membuat objek buku
function createBook(title, author, year) {
  return {
    title: title,
    author: author,
    year: year
  }
}
// Pemanggilan Fungsi untuk membuat objek buku
const book = createBook('1984', 'George Orwell', 1949);
console.log(book);

// Soal 2: Fungsi untuk mendapatkan informasi buku (menggabungkan title dan author)
function getBookInfo(book) {
  return `${book.title} by ${book.author}, ${book.year}`;
}

// Pemanggilan Fungsi untuk mendapatkan informasi buku
const bookInfo = getBookInfo(book);
console.log(bookInfo);

// Soal 3: Fungsi untuk menambahkan properti isAvailable ke objek buku
function addBookAvailability(book, availability) {
  book.isAvailability = availability;
  return book;
}

// Pemanggilan Fungsi untuk menambahkan properti isAvailable
const updatedBook = addBookAvailability(book, true);
console.log(updatedBook)

// Soal 4: Fungsi untuk mengecek apakah buku tersedia
function isBookAvailability(book) {
  return book.isAvailability;
}

// Pemanggilan Fungsi untuk mengecek ketersediaan buku
const availability = isBookAvailability(updatedBook);
console.log(availability);

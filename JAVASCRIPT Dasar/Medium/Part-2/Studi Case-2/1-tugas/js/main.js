// Studi Kasus 1: Informasi Buku (Level 1 - Easy)
// Deskripsi: Buat objek yang merepresentasikan informasi sebuah buku, termasuk judul, penulis, dan detail penerbitan.

// Detail Objek:

// Properti:
// title: judul buku (string).
// author: nama penulis (string).
// publication: detail penerbitan (nested object):
// publisher: nama penerbit (string).
// year: tahun penerbitan (number).
// Tugas:

// Buat objek buku dengan properti sesuai deskripsi.
// Buat fungsi untuk menampilkan nama penerbit.
// Buat fungsi untuk memperbarui tahun penerbitan.
// Function Name:

// getPublisher(book)
// updatePublicationYear(book, newYear)

function createBook(title, author, publisher, year) {
  return {
    title: title,
    author: author,
    publication: {
      publisher: publisher,
      year: year,
    },
  };
}

const book1 = createBook('aku adalah manusia', 'udin kenalpot', '2004', 'gramedia', '2024');
console.log(book1);

function getPublisher(book) {
  return book.publication.publisher;
}

console.log(getPublisher(book1));

function updatePublicationYear(book, newYear) {
  return book.publication.year = newYear;
}

updatePublicationYear(book1, 2100);
console.log(book1);
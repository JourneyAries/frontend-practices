//judul project: Sistem Pencarian Buku
//list fitur utama:
// 1. Menampilkan daftar buku yang bisa dicari.
// 2. Memiliki kolom pencarian untuk mencari buku berdasarkan judul.
// 3. Menampilkan hasil pencarian secara dinamis tanpa reload halaman.
// 4. Menampilkan detail buku setelah dipilih.
//list main requirement:
// 1. Input form untuk pencarian buku.
// 2. Daftar buku yang ditampilkan dalam bentuk list.
// 3. Menggunakan event listener untuk pencarian dan menampilkan hasilnya.
// 4. Menampilkan detail buku (judul, penulis, deskripsi) setelah dipilih.

const container = document.querySelector('.container');
const searchInput = document.getElementById('search-input');
const bookList = document.getElementById('book-list');
const bookDetail = document.getElementById('book-detail');

const books = [
	{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A story of love and ambition in 1920s America.' },
	{ title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A gripping tale of racial injustice in the Deep South.' },
	{ title: '1984', author: 'George Orwell', description: 'A dystopian novel about a totalitarian regime.' },
	{ title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A romantic tale of manners and societal expectations.' },
	{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', description: "A teenager's journey through angst and alienation." },
];

function showBookDetail(index) {
	const book = books[index];
	bookDetail.innerHTML = `
    <h3>${book.title}</h3>
    <p><strong>Penulis:</strong> ${book.author}</p>
    <p>${book.description}</p>
  `;
	bookDetail.style.display = 'block';
}

function displayBooks(bookArray) {
	bookList.innerHTML = '';
	bookArray.forEach((book, index) => {
		const li = document.createElement('li');
		li.textContent = book.title;
		li.addEventListener('click', () => showBookDetail(index));
		bookList.appendChild(li);
	});
}

searchInput.addEventListener('input', () => {
	const searchTerm = searchInput.value.trim().toLowerCase();
	const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm));
	displayBooks(filteredBooks);
});

displayBooks(books);

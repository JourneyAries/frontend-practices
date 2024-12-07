// Judul Tugas: Membuat Todo List dengan Checkbox

// Pseudocode Lengkap:
// Tangkap elemen input dengan id="todoInput", tombol dengan id="addTodo", dan elemen ul dengan id="todoList".
// Tambahkan event listener pada tombol "Tambah".
// Dalam event listener:
// Ambil nilai input.
// Buat elemen li baru yang berisi checkbox dan teks dari input.
// Tambahkan elemen li ke dalam ul.
// Kosongkan input setelah menambahkan elemen.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan elemen input dengan tipe checkbox untuk memungkinkan pengguna menandai item.
// Gunakan appendChild untuk menambahkan elemen baru ke dalam daftar.
// Pastikan untuk memeriksa jika input kosong sebelum menambahkannya ke daftar.

const todoInput = document.getElementById('todoInput');
const btnAddTodo = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

btnAddTodo.addEventListener('click', () => {
  if (todoInput.value.trim() === '') {
    alert('Error: tidak boleh kosong');
    return;
  }

	const newList = document.createElement('li');
	newList.innerHTML = `
  <li>
    <input type="checkbox"> ${todoInput.value}
  </li>
  `;
  todoList.appendChild(newList);
  todoInput.value = '';
});

// 2. To - Do List Sederhana

// Pseudocode:
// Tambahkan event listener pada tombol "Add Task".
// Saat tombol diklik, buat elemen <li> baru dengan teks dari input.
// Tambahkan <li> ke dalam <ul>.
// Kosongkan input setelah menambahkan tugas.

// Upgrade (v2, v3):
// v2: Tambahkan fitur untuk menghapus tugas dengan mengklik tugas tersebut.
// v3: Tambahkan toggle status (Done/Not Done) pada setiap tugas.

const todoApp = document.getElementById('todo-app');
const todoInput = document.getElementById('todo-input');
const btnAddTask = document.getElementById('add-task');
const todoList = document.getElementById('todo-list');

btnAddTask.addEventListener('click', () => {
	if (todoInput.value === '') {
		alert('Tidak bisa memasukan teks kosong');
		return;
	}
	const list = document.createElement('li');
	list.textContent = todoInput.value;
  todoList.appendChild(list);
  todoInput.value = '';
});
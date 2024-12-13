// project #: 2
// judul project: Daftar Aktivitas Harian (To-Do List)
// list fitur utama:
// 1. Menambahkan aktivitas ke dalam daftar.
// 2. Menghapus aktivitas dari daftar.
// 3. Menampilkan daftar aktivitas yang telah ditambahkan.
// list main requirement:
// 1. Input untuk nama aktivitas.
// 2. Tombol untuk menambahkan aktivitas ke daftar.
// 3. Daftar aktivitas yang ditampilkan dengan tombol hapus di setiap item.

const todoInput = document.getElementById('todo-input');
const btnAddTodo = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');
let todoArray = [];

btnAddTodo.addEventListener('click', () => {
	const todoValue = todoInput.value.trim();

	if (todoValue !== '') {
		todoArray.push({
			todoValue: todoValue,
		});

		todoDisplay();
		todoInput.value = '';
	}
});

function todoDisplay() {
	todoList.innerHTML = '';

	todoArray.forEach((item, index) => {
		const todoItem = document.createElement('li');
		todoItem.innerHTML = `${item.todoValue} <button class="btnDelete">Delete</button>`;

		// event delete
		const btnDelete = todoItem.querySelector('.btnDelete');
		btnDelete.addEventListener('click', () => {
			todoArray.splice(index, 1); // Menghapus item dari array berdasarkan index
			todoDisplay(); //refresh
		});

		todoList.appendChild(todoItem);
	});
}

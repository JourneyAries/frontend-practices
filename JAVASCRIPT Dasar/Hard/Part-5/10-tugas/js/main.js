// project #: 1
// judul project: To-Do List Sederhana
// list fitur utama:
// 1. Menambah item dalam daftar tugas.
// 2. Menandai item tugas sebagai selesai.
// 3. Menghapus item dari daftar tugas.
// list main requirement:
// 1. Menggunakan form untuk menambah tugas.
// 2. Daftar tugas muncul sebagai list item.
// 3. Memiliki tombol untuk menghapus atau menandai tugas selesai.

const todoContainer = document.querySelector('.todo-container');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoContainer.addEventListener('click', (e) => {
	e.preventDefault();
	//menambah item dalam daftar tugas
	if (e.target.id === 'add-btn') {
		const task = document.createElement('li');
		task.classList.add('todo-item');
		task.innerHTML = `
        <p>${todoInput.value}</p>
        <button class="btn-mark-done" type="button">Done</button>
        <button class="btn-delete" type="button">Delete</button>`;
		if (todoInput.value.trim() !== '') {
			todoList.appendChild(task);
			todoInput.value = '';
		}
	}

	//Menandai item tugas sebagai selesai
	if (e.target.classList.contains('btn-mark-done')) {
		const taskItem = e.target.parentElement;
		const taskText = taskItem.querySelector('p');
		taskText.classList.toggle('done');

		//ganti teks button
		if (taskText.classList.contains('done')) {
			e.target.textContent = 'Undo';
		} else {
			e.target.textContent = 'Done';
		}
	}

	if (e.target.classList.contains('btn-delete')) {
		const taskItem = e.target.parentElement;
		taskItem.remove();
	}
});

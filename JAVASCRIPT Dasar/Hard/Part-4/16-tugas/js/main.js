// Judul Tugas: To-Do List dengan Fitur Edit

// Pseudocode Lengkap:
// Buat input teks untuk menambahkan tugas baru.
// Buat tombol "Tambah Tugas".
// Tampilkan daftar tugas di bawah input.
// Setiap tugas harus memiliki tombol "Edit" untuk mengubah nama tugas.
// Gunakan prompt() atau input untuk meminta nama tugas baru.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan prompt() untuk meminta input baru jika tombol edit ditekan.
// Gunakan textContent untuk menampilkan nama tugas yang baru setelah diubah.
// Pastikan setiap tugas memiliki tombol "Hapus" untuk menghapusnya.

const inputTask = document.getElementById('task-input');
const btnAddTask = document.getElementById('add-task-btn');
const listTask = document.getElementById('task-list');

btnAddTask.addEventListener('click', (e) => {
	e.preventDefault();
	const task = inputTask.value;
	const newList = document.createElement('li');
	newList.classList.add('listItem');
	newList.innerHTML = `
    <li>
		  <span>${task}</span>
			<button style="background-color: greenyellow" class="btnEdit">Edit</button>
			<button style="background-color: rgb(235, 60, 60)" class="btnDelete">Delete</button>
		</li>
  `;
	listTask.appendChild(newList);
	inputTask.value = '';
});

listTask.addEventListener('click', (e) => {
	if (e.target && e.target.classList.contains('btnEdit')) {
		const task = e.target.previousElementSibling;
		const editedTask = prompt('Edit Task Kamu: ', task.textContent);
		if (editedTask) {
			task.textContent = editedTask;
		}
	}

	if (e.target && e.target.classList.contains('btnDelete')) {
		const listItem = e.target.closest('li');
		listItem.remove();
	}
});

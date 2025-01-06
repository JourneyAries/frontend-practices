// Tugas: Gunakan closure untuk membuat pengingat

function createReminder() {
	const tasks = [];

	function addTask(task) {
		tasks.push(task);
		console.log(`Task added: ${task}`);
	}

	function showTasks() {
		console.log(`Tasks: ${tasks.join(', ')}`);
	}

	return { addTask, showTasks };
}

const reminder = createReminder();
reminder.addTask('Buy groceries');
reminder.addTask('Buy Salad');

reminder.showTasks();

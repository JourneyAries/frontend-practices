// Tugas: Ambil data dari API dan tampilkan dengan menyusun informasi.

async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(`Todo Title: ${data.title}`);
}


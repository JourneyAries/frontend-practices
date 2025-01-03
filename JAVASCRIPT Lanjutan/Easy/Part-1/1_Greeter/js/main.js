// Tugas: Buat fungsi yang menghasilkan fungsi lain untuk menyapa seseorang

function createGreeter(name) {
  return function () {
    console.log(`Hello, ${name}`);
  };
}

const greetJohn = createGreeter('Jhon');
greetJohn();
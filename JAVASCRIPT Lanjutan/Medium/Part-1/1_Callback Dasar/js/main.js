// Tugas: Panggil fungsi `greet` sebagai callback dari fungsi `processName`.

function greet(name) {
  console.log(`Hello, ${name}`);
}

function processName(name, callback) {
  callback(name);
}

processName('alice', greet)
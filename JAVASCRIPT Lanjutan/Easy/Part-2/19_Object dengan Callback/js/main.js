// Tugas: Destructuring object dalam parameter fungsi callback

function processData({ name, age }, callback) {
  callback(name, age);
}

processData({ name: 'alice', age: 25 }, (name, age) => {
  console.log(`Name: ${name}, Age: ${age}`);
})
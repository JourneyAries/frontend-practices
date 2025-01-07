// Tugas: Destructuring nilai yang dikembalikan oleh sebuah fungsi

function getUser() {
  return { name: 'alice', age: 25 };
}

const { name, age } = getUser();
console.log(name);
console.log(age);
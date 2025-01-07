// Tugas: Destructuring hasil pengembalian dari fungsi asynchronous

async function getUserData() {
	return { name: 'alice', age: 25 };
}

getUserData().then(({ name, age }) => {
	console.log(name);
	console.log(age);
});

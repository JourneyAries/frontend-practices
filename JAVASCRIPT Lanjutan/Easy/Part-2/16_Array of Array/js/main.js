// Tugas: Destructuring array of arrays

const arr = [
	[1, 2],
	[3, 4],
	[5, 6],
];

const [[a, b], [c, d], [e, f]] = arr;

console.log(a, b);
console.log(c, d);
console.log(e, f);

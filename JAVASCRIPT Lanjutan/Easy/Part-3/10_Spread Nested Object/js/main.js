const obj = { user: { name: 'alice', age: 25 } };
const newObj = { ...obj, user: { ...obj.user, age: 30 } };
console.log(newObj);

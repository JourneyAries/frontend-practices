//Studi Kasus 4: Mencari Pengguna Berdasarkan Usia (Level 4 - Hard)

let Users = [
  {username: 'Udin', age: '20'},
  {username: 'Pertama', age: '15'},
  {username: 'Ketiga', age: '21'},
]

function findUsersByAge(obj, minAge) {
  return obj.filter(user => user.age >= minAge);
}

let result = findUsersByAge(Users, 18);
console.log(result);
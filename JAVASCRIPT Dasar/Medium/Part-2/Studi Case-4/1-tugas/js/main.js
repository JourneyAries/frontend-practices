//Studi Kasus 1: Menampilkan Properti Objek (Level 1 - Easy)

let User = {
  name: 'udin',
  age: 20,
  email: 'udin@gmail.com',
}

function displayObjectProperties(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`)
  }
}

displayObjectProperties(User);
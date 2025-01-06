// Tugas: Gunakan closure untuk menyimpan data rahasia

function secretMessage(message) {
  return function () {
    console.log(`Secret is: ${message}`);
  }
}

const mySecert = secretMessage('I Love Your');
mySecert();
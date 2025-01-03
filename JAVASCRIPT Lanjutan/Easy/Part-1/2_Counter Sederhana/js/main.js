// Tugas: Buat fungsi counter yang menambah angka setiap kali dipanggil

function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  }
}

const counter = createCounter();
counter();
counter();
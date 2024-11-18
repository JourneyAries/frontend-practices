//16. Mengonversi Kalimat Menjadi Pascal Case
//Buat fungsi toPascalCase(str) yang mengonversi sebuah kalimat ke dalam format Pascal Case.

function toPascalCase(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(toPascalCase("hello world example"));
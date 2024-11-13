// balik string
function balikString(string) {
  let stringBaru = '';
  for (let i = string.length - 1; i >= 0; i--){
    stringBaru += string[i];
  }
  return stringBaru;
}
// [END] balik string

// menghitung panjang string
function panjangString(string) {
  return string.length;
}
// [END] menghitung panjang string

// ambil karakter pertama dan terakhir
function ambilKarakter(string) {
  let karakterPertama = string[0];
  let karakterTerakhir = string[string.length-1];

  return 'karakter Pertama: ' + karakterPertama + ' karakter terkahir: ' + karakterTerakhir;
}
// [END] ambil karakter pertama dan terakhir


// menganti huruf tertentu dengan string
function gantiHuruf(string, target, pengganti) {
  let stringBaru = '';
  for (let i = 0; i < string.length; i++){
    if (string[i] == target) {
      stringBaru += pengganti;
    }
    else {
      stringBaru += string[i];
    }
  }
  return stringBaru;
} 
// [END] mengganti huruf tertentu dengan string

// menghitung vocal
function menghitungVocal(string) {
  let hurufVocal = 0;
  for (let i = 0; i < string.length; i++){
    if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'e') {
      hurufVocal ++;
    }
  }
  return hurufVocal;
}
// [END] menghitung vocal


// mengabungkan string dengan separator
function gabungString(string, separator){
  let stringBaru = '';
  for (let i = 0; i < string.length; i++){
    stringBaru += string[i];
    if (i < string.length - 1) {
      stringBaru += separator;
    }
  }
  return stringBaru;
}
// [END] menggabungkan string dengan separator

// menghapus Spasi
function hapusSpasi(string) {
  let stringBaru = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i] != ' ') {
      stringBaru += string[i];
    }
  }
  return stringBaru;
}
// [END] menghapus spasi

// potong string berdasarkan panjang
function potongString(string, potongDimana) {
  let stringBaru = '';
  for (let i = 0; i < string.length; i++){
    if (i == potongDimana) {
      return stringBaru;
    }
    stringBaru += string[i];
  }
}
// [END] potong string berdasarkan panjang

// menghitung jumlah kata
function jumlahKata(string) {
  let totalKata = 0;
  let sedangDalamKata = false;
  for (let i = 0; i < string.length; i++){
    if (string[i] != ' ') {
        if(!sedangDalamKata) {
        totalKata++;
        sedangDalamKata = true;
      }
    } else {
      sedangDalamKata = false;
    }
  }
  return totalKata;
}
// [END] menghitung jumlah kata

// menemukan indeks karakter
function cariIndeksPertama(string, char) {
  for (let i = 0; i < string.length; i++){
    if (string[i] == char) {
      return i;
    }
  }
}
// [END] menemukan indeks karakter
function formatString(string) {
  let stringBaru = '';
  for (let i = 0; i < string.length; i++) { 
    stringBaru += string[i];
    if (i < string.length - 1) {
      stringBaru += ', ';
    }

  }
  return stringBaru;
}
// [END] mengganti dalam kalimat

// menghtiung jumlah konsonan
function hitungKonsonan(string) { 
  let hitungKonsonan = 0;
  for (let i = 0; i < string.length; i++) { 
    if (string[i] != 'a' && string[i] != 'i' && string[i] != 'u' && string[i] != 'e' && string[i] != 'o') { 
      hitungKonsonan++;
    }
  }
  return hitungKonsonan;
}
// [END] menghitung jumlah konsonan

// membuat singkatan
function buatSingkatan(string) {
  let stringBaru = '';

  for (let i = 0; i < string.length; i++){
    if (i == 0) {
      stringBaru += string[i];
    } else if (string[i] == ' ') {
      stringBaru += string[i + 1];
    }
  }
  return stringBaru;
}
// [END] membuat singkatan


// string terpanjang
function stringTerpanjang(array) {
  let terpanjang = '';
  for (let i = 0; i < array.length; i++){
    if (array[i].length > terpanjang.length) { 
      terpanjang = array[i];
    }
  }
  return terpanjang;
}
// [END] string terpanjang

// menghitung huruf tertentu
function hitungHuruf(string, cariHurufApa) {
  let totalHuruf = 0;
  for (let i = 0; i < string.length; i++){
    if (string[i] == cariHurufApa) {
      totalHuruf++;
    }
  }
  return totalHuruf;
}
// [END] menghitung huruf tertentu

// mengubah ke kapital
function kapitalSemua(string) {
  let stringBaru = '';
  for (let i = 0; i < string.length; i++){
    stringBaru += string[i].toUpperCase();
  }
  return stringBaru;
}
// [END] mengubah ke kapital

// menukar huruf
function tukarHuruf(string) {
  let stringBaru = '';
  for (let i = 0; i < string.length; i++){
    if (string[i] == string[i].toLowerCase()) {
      stringBaru += string[i].toUpperCase();
    } else {
      stringBaru += string[i].toLowerCase();
    }
  }
  return stringBaru;
}
// [END] menukar huruf

// menghilangkan karakter Khusus
function hilangkanKarakterKhusus(string) { 
  let stringBaru = '';
  for (let i = 0; i < string.length; i++){
    if (/^[A-Za-z0-9]$/.test(string[i])) {
      stringBaru += string[i];
    }
  }
  return stringBaru;
}
// [END] menghilangkan karakter Khusus

// ada angka ga
function adaAngka(string) { 
  for (let i = 0; i < string.length; i++) {
    if (/[0-9]/.test(string[i])) {
      return true;
    }
  }
  return false; 
}
// [END] ada angka ga

// cetakDenganString
function cetakDenganIndeks(string) {
  let stringBaru = '';
  for (let i = 0; i < string.length; i++){
    stringBaru += i + ': ' + string[i];
    if (i < string.length - 1) { 
      stringBaru += ', ';
    }
  }
  return stringBaru;
}
// [END] cetakDenganString

console.log(balikString('hello'));
console.log(panjangString("hello"));
console.log(ambilKarakter("hello"));
console.log(gantiHuruf("banana", "a", "o"));
console.log(menghitungVocal("banana"));
console.log(gabungString(['javascript', 'is', 'fun'], '-'));
console.log(hapusSpasi("halo dunia"));
console.log(potongString("Hello World",4));
console.log(jumlahKata("  Halo dunia! Selamat datang."));
console.log(cariIndeksPertama("frontend", "o"));
console.log(formatString(["apel", "jeruk", "mangga"]));
console.log(hitungKonsonan("javascript"));
console.log(buatSingkatan("Hyper Text Markup Language"));
console.log(stringTerpanjang(["apple", "banana", "kiwi", "strawberry"]));
console.log(hitungHuruf("programming", "g"));
console.log(kapitalSemua("javascript"));
console.log(tukarHuruf("Hello World"));
console.log(hilangkanKarakterKhusus("H3ll@ W0rld!"));
console.log(adaAngka("Halo123"));
console.log(cetakDenganIndeks("abc"));
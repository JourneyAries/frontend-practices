//24. Permainan Kartu Warna Tertentu
//Buat fungsi countColorCards(cards, color) yang menerima array cards (yang berisi warna-warna seperti "merah", "biru", "hijau", dll.) dan sebuah string color. Fungsi ini mengembalikan jumlah kartu dengan warna tertentu yang sesuai dengan color.

function countColorCards(cards, color) {
  let count = 0;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] == color) {
      count++;
    }
  }
  return count;
}

console.log(countColorCards(["merah", "biru", "merah", "hijau", "merah"], "merah"));
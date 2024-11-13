//25. Permainan Hitung Nilai Kartu
//Buat fungsi calculateCardPoints(cards) yang menerima array cards yang berisi nilai kartu sebagai string (misalnya, "2", "3", ..., "10", "J", "Q", "K", "A") dan mengembalikan total nilai semua kartu. Asumsikan nilai-nilai berikut:

function calculateCardPoints(cards) {
  const cardValues = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  };

  return cards.reduce((accumulator, card) => accumulator + cardValues[card], 0);
}

console.log(calculateCardPoints(["2", "3", "A", "K"]));
//5. Kartu Tertinggi
//Buat fungsi highestCard(card1, card2) yang menerima dua nilai kartu (angka 2-10, "J", "Q", "K", "A") dan mengembalikan nilai kartu tertinggi.

function highestCard(card1, card2) {
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
    'K': 12,
    'Q': 13,
    'K': 14,
    'A': 15,
  };

  const value1 = cardValues[card1];
  const value2 = cardValues[card2];

  //memeriksa kartu dengan nilai tertinggi
  if (value1 > value2) {
    return card1;
  } else if (value1 < value2){
    return card2;
  } else {
    return 'SERI'
  }
}

console.log(highestCard('Q', 'Q'));
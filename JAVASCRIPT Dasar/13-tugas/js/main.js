//13. Kartu yang Sama
//Buat fungsi isMatchingPair(card1, card2) yang mengembalikan true jika card1 dan card2 memiliki nilai yang sama, dan false jika tidak.

function isMatchingPair(card1, card2) {
  let cardValues = {
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

  value1 = cardValues[card1];
  value2 = cardValues[card2];

  return value1 === value2;
}

console.log(isMatchingPair('2','2'));


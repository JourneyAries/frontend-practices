//22. Simulasi Kartu yang Hilang
//Buat fungsi missingCard(deck, missingCard) yang mengembalikan true jika missingCard tidak ada di dalam deck, dan false jika kartu itu ada.


function missingCard(missingCard) {
  const deck = {
    '2':2,
    '3':3,
    '4':4,
    '5':5,
    '6':6,
    '7':7,
    '8':8,
    '9':9,
    '10':10,
    'J':11,
    'Q':12,
    'K':13,
    'A':14
  };
  
  return !(missingCard in deck);
}

console.log(missingCard('K'));

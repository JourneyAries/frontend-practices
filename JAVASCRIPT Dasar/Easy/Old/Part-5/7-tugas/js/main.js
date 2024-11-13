//7. Mengocok Dek Kartu
//Buat fungsi shuffleDeck(deck) yang menerima array deck dan mengacak urutannya secara acak.


function shuffleDeck(card) {
  for (let i = card.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [card[i], card[j]] = [card[j], card[i]]
  }
  return card;
}

let card = ['1', '2', '3', '4'];

console.log(`before shuffle: ${card.join(', ')}`);
console.log(`after shuffle: ${shuffleDeck([...card]).join(', ')}`);
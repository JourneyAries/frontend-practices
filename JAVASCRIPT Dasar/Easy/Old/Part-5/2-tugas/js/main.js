//2. Suit Batu-Gunting-Kertas
//Buat fungsi playRockPaperScissors(player1, player2) yang menerima dua string ("batu", "gunting", atau "kertas") dan mengembalikan pemenang atau "seri" jika hasilnya sama.

// terima inputan
const validchoice = ['batu', 'gunting', 'kertas'];

// validasi inputan
function validation(player1, player2) {
  if (!validchoice.includes(player1) || !validchoice.includes(player2) ) {
    return `Pilihan tidak valid. Pilih antara 'batu,' 'gunting,' atau 'kertas'.`;
  }
  return null;
};

//aturan pemainan
function rules(player1, player2) {
  if (
    (player1 == 'batu' && player2 == 'gunting') ||
    (player1 == 'gunting' && player2 == 'kertas') ||
    (player1 == 'kertas' && player2 == 'batu')) {
    return 'menang';
  } else if (player1 == player2) {
    return 'seri';
  } else {
    return 'kalah';
  }
};


function playRockPaperScissors(player1, player2) {
  //cek validasi
  const validationMessage = validation(player1, player2);
  if (validationMessage) {
    return validationMessage;
  }

  const result = rules(player1, player2);
  return `hasil: player1 ${result}`;

}

console.log(playRockPaperScissors('batu', 'kertas'));
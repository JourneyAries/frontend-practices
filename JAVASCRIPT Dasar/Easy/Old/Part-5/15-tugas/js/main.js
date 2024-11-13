//15. Permainan Tic-Tac-Toe
//Buat fungsi checkWinner(board) yang menerima array board berukuran 3x3 dan mengembalikan "X", "O", atau "seri" berdasarkan siapa yang menang atau jika terjadi seri.

let board = [
  ['O', 'X', 'X'],
  ['X', 'O', 'X'],
  ['O', 'X', 'O']
]

function checkWinner() {
  //check row
  for (let i = 0; i < 3; i++){
    if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
      return board[i][0];
    }
  }

  //check column
  for (let i = 0; i < 3; i++){
    if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
      return board[0][i];
    }
  }

  //check diagonal
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return board[0][0];
  }
  if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    return board[0][2];
  }
  return null;
}

console.log(checkWinner());


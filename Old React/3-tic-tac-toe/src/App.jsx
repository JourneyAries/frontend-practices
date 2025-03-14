/* eslint-disable no-unused-vars */
import { useState } from 'react';

function Square({ value, onSquareClick }) {
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}

function Board({ xIsNext, squares, onPlay }) {
	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		const nextSquares = squares.slice();
		nextSquares[i] = xIsNext ? 'X' : 'O';

		onPlay(nextSquares);
	}

	const winner = calculateWinner(squares);
	let status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`;

	return (
		<>
			<div className="status">{status}</div>
			<div className="board">
				{Array(9)
					.fill(null)
					.map((_, i) => (
						<Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
					))}
			</div>
		</>
	);
}

export default function Game() {
	const [xIsNext, setXIsNext] = useState(true);
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares = history[currentMove];

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
		setXIsNext(nextMove % 2 === 0);
	}

	function handlePlay(nextSquares) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
		setXIsNext((prev) => !prev);
	}

	const moves = history.map((_, move) => {
		const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</div>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	);
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let [a, b, c] of lines) {
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

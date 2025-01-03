function createScores() {
	let score = 0;

	function increment(points) {
		score += points;
		console.log(`+${points}pts`);
	}

	function decrement(points) {
		score -= points;
		console.log(`-${points}pts`);
	}

	function getScores() {
		return score;
	}

	return { increment, decrement, getScores };
}

const game = createScores();
game.increment(3);
game.increment(3);
console.log(game.getScores());
game.decrement(1);
console.log(game.getScores());

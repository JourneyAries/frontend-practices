//judul project: Kuis Interaktif Sederhana
//list fitur utama:
// 1. Sebuah pertanyaan kuis.
// 2. Input untuk pengguna menjawab.
// 3. Pesan yang menunjukkan apakah jawaban benar atau salah.
//list main requirement:
// 1. Pertanyaan kuis tetap.
// 2. Input untuk pengguna.
// 3. Tombol untuk memeriksa jawaban.

const quizData = [
	{ question: 'Apa ibukota Indonesia?', answer: 'Jakarta' },
	{ question: 'Apa ibukota Jepang?', answer: 'Tokyo' },
	{ question: 'Apa ibukota Prancis?', answer: 'Paris' },
];

const container = document.querySelector('.container');
const answerInput = document.getElementById('answer-input');
const quizResult = document.getElementById('quiz-result');
let currentQuestionIndex = 0;

//tampilkan pertanyaan 1
const questionElement = document.querySelector('.container p');
questionElement.textContent = quizData[currentQuestionIndex].question;

container.addEventListener('click', (e) => {
	if (e.target.id === 'check-answer-btn') {
		const userAnswer = answerInput.value.trim();
		const correctAnswer = quizData[currentQuestionIndex].answer;

		if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
			quizResult.textContent = 'Benar! Jawaban Anda tepat.';
			quizResult.style.color = 'green';
		} else {
			quizResult.textContent = `Salah. Jawaban yang benar adalah: ${correctAnswer}`;
			quizResult.style.color = 'red';
		}

		answerInput.value = '';
	}
});

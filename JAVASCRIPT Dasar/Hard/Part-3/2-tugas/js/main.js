// Soal 1: Tebak Angka
// Program: Buat program untuk menebak angka antara 1 - 10. Input angka, klik tombol "Cek", lalu tampilkan hasilnya(benar / salah).
// Hint:
// Gunakan Math.random() untuk menghasilkan angka acak antara 1-10.
// Bandingkan input pengguna dengan angka acak.
// Pseudocode:
// Buat angka acak antara 1-10.
// Tangkap input dari pengguna saat tombol "Cek" diklik.
// Jika angka cocok, tampilkan pesan "Benar!" di <p id="result">.
// Jika tidak cocok, tampilkan pesan "Salah! Coba lagi."

const guessInput = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');
const livesTxt = document.getElementById('lives');

//random number 1-10
const getRandomNumber = () => {
	return Math.floor(Math.random() * 10) + 1;
};

//start
let randomNumber = getRandomNumber();
let lives = 3;
livesTxt.textContent = lives;
console.log(randomNumber);

//Listener - checkBtn
checkBtn.addEventListener('click', () => {
	const userGuess = parseInt(guessInput.value);
	//validation
	if (isNaN(userGuess) || userGuess > 10 || userGuess < 1) {
		result.textContent = 'Masukkan angka valid antara 1 dan 10';
		result.style.color = 'orange';
		return;
	}

	//rules
	if (userGuess === randomNumber) {
		result.textContent = 'BENAR';
		result.style.color = 'green';
	} else if (userGuess > randomNumber) {
		result.textContent = 'Tebakan terlalu TINGGI';
		result.style.color = 'red';
	} else {
		result.textContent = 'Tebakan terlalu RENDAH';
		result.style.color = 'red';
	}

	lives--;
	livesTxt.textContent = lives;

	if (lives === 0) {
		result.textContent = `Selesai! Angka yang benar adalah ${randomNumber}.`;
		result.style.color = 'purple';
	}
});

//Listener - resetBtn
resetBtn.addEventListener('click', () => {
	randomNumber = getRandomNumber();
	guessInput.value = '';
	result.textContent = '';
	lives = 3;
});

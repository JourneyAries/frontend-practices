// Tugas 24: Buat Timer
// Soal: Buat timer yang memperbarui teks elemen < p > setiap detik dengan waktu mundur dari 10 hingga 0.
// Hint: Gunakan setInterval() untuk membuat timer.

const timerElement = document.getElementById('timer');
let timeLeft = 10;

const timerInterval = setInterval(() => {
  timerElement.textContent = timeLeft;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    timerElement.textContent = 'Time is up!';
  }
}, 1000);

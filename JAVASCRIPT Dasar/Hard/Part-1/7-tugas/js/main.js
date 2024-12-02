// Tugas 7: preventDefault() - Cegah Default Submit Form
// Soal: Cegah formulir melakukan submit default saat tombol Submit diklik.
// Hint: Gunakan event "submit" dan event.preventDefault() untuk mencegah submit

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('Form submission prevented!');
});
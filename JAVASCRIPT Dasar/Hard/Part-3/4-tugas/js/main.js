// 4. Counter
// Pseudocode:
// Tambahkan event listener ke tombol + dan -.
// Tambahkan atau kurangi nilai counter sesuai tombol yang ditekan.
// Perbarui elemen <span> dengan nilai counter.
// Upgrade (v2, v3):
// v2: Tambahkan tombol "Reset".
// v3: Tambahkan batasan minimum dan maksimum untuk counter.

const counter = document.getElementById('counter');
const decrement = document.getElementById('decrement');
const count = document.getElementById('count');
const increment = document.getElementById('increment');
const reset = document.getElementById('reset');

counter.addEventListener('click', (e) => {
  if (e.target.id === 'increment') {
    if (parseInt(count.textContent) < 10) {
      count.textContent = parseInt(count.textContent) + 1;
    }
  } else if (e.target.id === 'decrement') {
    if (parseInt(count.textContent) > 0) {
      count.textContent = parseInt(count.textContent) - 1;
    }
  } else if(e.target.id === 'reset'){
    count.textContent = '0';
  }
});

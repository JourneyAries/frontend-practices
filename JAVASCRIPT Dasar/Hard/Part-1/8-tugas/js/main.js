// Tugas 8: Event Bubbling - Tangani Event Parent dan Child
// Soal: Buat event bubbling dengan menangkap klik pada elemen parent dan child.
// Hint: Gunakan addEventListener di kedua elemen, dan perhatikan urutan bubbling.

const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', (e) => {
  console.log('Parent Clicked');
});

child.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Child Clicked');
});
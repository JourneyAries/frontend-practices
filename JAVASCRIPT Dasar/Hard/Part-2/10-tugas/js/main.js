// Soal 10: Traversing to Parent Node
// Soal: Pilih elemen dengan kelas child dan cari parent-nya, kemudian ubah warna latar belakang parent tersebut.
// Hint: Gunakan .parentNode.

const child = document.querySelector('.child');
child.parentNode.style.backgroundColor = 'red';

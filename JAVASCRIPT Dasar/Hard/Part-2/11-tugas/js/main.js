// Soal 11: Traversing ke Child Nodes
// Soal: Pilih elemen dengan ID container dan ubah warna teks dari semua anak langsungnya menjadi biru.
// Hint: Gunakan children.

const container = document.getElementById('container');
const allChild = container.children;

Array.from(allChild).forEach(item => {
  item.style.color = 'blue';
})
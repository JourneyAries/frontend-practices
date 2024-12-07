// Judul Tugas: Membuat Accordion

// Pseudocode Lengkap:
// Tangkap semua elemen button di dalam accordion.
// Tambahkan event listener ke setiap tombol untuk memantau klik.
// Dalam event listener:
// Tangkap elemen div saudara dari tombol tersebut.
// Periksa apakah elemen div saat ini terlihat (gunakan style.display).
// Jika terlihat, ubah display menjadi none.
// Jika tidak terlihat, ubah display menjadi block.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan nextElementSibling untuk menemukan elemen di bawah tombol.
// Gunakan style.display untuk mengatur visibilitas elemen

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', (e) => {
  if (e.target.classList.contains('accordion-btn')) {
    const content = e.target.nextElementSibling;

    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
})
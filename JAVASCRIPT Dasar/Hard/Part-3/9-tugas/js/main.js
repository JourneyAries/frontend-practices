// Memeriksa Palindrome
// Pseudocode:
// Tangkap elemen input, tombol, dan elemen untuk hasil.
// Tambahkan event listener pada tombol untuk membaca teks dari input.
// Buat fungsi untuk membalik teks menggunakan .split(''), .reverse(), dan .join('').
// Bandingkan teks asli dengan teks yang dibalik. Jika sama, tampilkan "Palindrome", jika tidak, tampilkan "Bukan Palindrome".
// Cara Berpikir:
// Palindrome adalah kata atau frasa yang terbaca sama baik dari depan maupun belakang.
// Abaikan huruf besar/kecil dengan .toLowerCase().
// Upgrade Fitur Versi 2:
// Abaikan spasi dan karakter non-alfabet untuk pemeriksaan lebih lengkap.
// Upgrade Fitur Versi 3:
// Tambahkan mode untuk memeriksa palindrome pada kalimat atau paragraf.

const palindromeInput = document.getElementById('palindromeInput');
const checkPalindrome = document.getElementById('checkPalindrome');
const result = document.getElementById('result');

checkPalindrome.addEventListener('click', () => {
  const originText = palindromeInput.value.toLowerCase().replace('/[^a-z0-9]/g', '');
  const reverseText = originText.split('').reverse().join(''); 
  result.textContent = (originText === reverseText ? 'Palindrome' : 'Bukan Palindrome');
})
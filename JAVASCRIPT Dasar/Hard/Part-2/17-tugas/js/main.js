// Soal 17: Event Delegation pada Daftar
// Soal: Tambahkan event listener ke elemen <ul> sehingga ketika item <li> di dalamnya diklik, alert muncul dengan teks dari item yang diklik.
//   Hint: Gunakan event.target untuk menemukan elemen yang diklik.

const list = document.getElementById('list');

list.addEventListener('click', function (e) {
	if (e.target.tagName === 'LI') {
		alert('Clicked');
	}
});

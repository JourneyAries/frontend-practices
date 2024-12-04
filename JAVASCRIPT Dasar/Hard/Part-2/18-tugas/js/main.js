// Soal 18: Delegasi Event untuk Form
// Soal: Tambahkan event listener ke form sehingga jika input di dalamnya diisi dan tombol submit ditekan, mencegah pengiriman form dan menampilkan teks input dalam alert.
// Hint: Gunakan event.target untuk mendapatkan nilai input.

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (e) {
	e.preventDefault();
	const text = e.target.querySelector('[type="text"]').value;
	alert(text);
});

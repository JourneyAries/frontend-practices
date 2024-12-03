// Soal 4: Pilih Elemen Berdasarkan Atribut
// Soal: Pilih elemen dengan atribut data-type="fruit" dan ubah warnanya menjadi hijau.
// Hint: Gunakan document.querySelectorAll() dengan selector atribut.

const fruits = document.querySelectorAll('[data-type="fruit"]');
fruits.forEach((fruit) => {
	fruit.style.backgroundColor = 'green';
	fruit.style.color = 'white';
});

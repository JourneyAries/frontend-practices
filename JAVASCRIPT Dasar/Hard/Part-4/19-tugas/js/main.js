// Judul Tugas: Dropdown Dinamis dengan Pilihan Berbeda

// Pseudocode Lengkap:
// Buat elemen <select> dengan ID dynamic-dropdown.
// Buat tombol "Tambah Pilihan" yang akan menambahkan pilihan baru ke dropdown.
// Pilihan baru yang ditambahkan harus diberi label yang berbeda-beda, misalnya "Pilihan 1", "Pilihan 2", dan seterusnya.
// Ketika pilihan dropdown dipilih, tampilkan pilihan yang dipilih di bawah dropdown.

// Cara Berpikir / Hack atau Tips Lengkap:
// Gunakan createElement() untuk membuat elemen option baru.
// Gunakan appendChild() untuk menambahkan elemen option ke dropdown.
// Gunakan addEventListener() untuk mendeteksi perubahan pilihan dropdown dan menampilkan pilihan yang dipilih.

const dynamicDropdown = document.getElementById('dynamic-dropdown');
const btnAddOption = document.getElementById('add-option-btn');
const eleOptionSelected = document.getElementById('selected-option');

//default
const firstOption = document.createElement('option');
firstOption.value = 'Pilihan 1';
firstOption.textContent = 'Pilihan 1';
dynamicDropdown.appendChild(firstOption);
dynamicDropdown.value = 'Pilihan 1';
eleOptionSelected.textContent = `Pilihan yang dipilih: Pilihan 1`;

let optionCount = 2;
btnAddOption.addEventListener('click', () => {
	const newOption = document.createElement('option');
	newOption.value = `Pilihan ${optionCount}`;
	newOption.textContent = `Pilihan ${optionCount}`;

	dynamicDropdown.appendChild(newOption);
	optionCount++;
});

dynamicDropdown.addEventListener('change', () => {
	const optionSelected = dynamicDropdown.value;
	eleOptionSelected.textContent = `Pilihan yang dipilih ${optionSelected}`;
});

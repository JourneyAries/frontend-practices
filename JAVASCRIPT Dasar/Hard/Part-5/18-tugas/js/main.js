//judul project: Hitung Umur Sederhana
//list fitur utama:
// 1. Input tanggal lahir (format: tanggal/bulan/tahun).
// 2. Menampilkan umur berdasarkan tanggal lahir yang dimasukkan.
//list main requirement:
// 1. Form input untuk tanggal lahir.
// 2. Menampilkan umur secara otomatis setelah input tanggal lahir.
// 3. Penghitungan umur dilakukan dengan menghitung selisih tahun.

//declaration
const birthdateInput = document.getElementById('birthdate');
const ageDisplay = document.getElementById('age-display');

//cara tanpa fungsi
birthdateInput.addEventListener('input', () => {
	const birthdate = birthdateInput.value;

	if (birthdate) {
		const today = new Date();
		const birthDate = new Date(birthdate);
		let age = today.getFullYear() - birthDate.getFullYear();
		const month = today.getMonth();
		const day = today.getDate();

		//jika belum lewat ulang tahun, tahun ini maka
		if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
			age--;
		}

		ageDisplay.textContent = `Umur anda ${age} tahun`;
	} else {
		ageDisplay.textContent = '';
	}
});

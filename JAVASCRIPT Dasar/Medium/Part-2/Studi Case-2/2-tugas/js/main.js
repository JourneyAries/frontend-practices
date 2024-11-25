// Studi Kasus 2: Profil Mahasiswa (Level 2 - Easy)
// Deskripsi: Buat objek yang menyimpan data mahasiswa, termasuk informasi kontak.

// Detail Objek:

// Properti:
// name: nama mahasiswa (string).
// age: usia (number).
// contact: informasi kontak (nested object):
//   email: alamat email (string).
//   phone: nomor telepon (string).
// Tugas:

// Buat objek mahasiswa dengan properti sesuai deskripsi.
// Buat fungsi untuk mengambil informasi email mahasiswa.
// Buat fungsi untuk memperbarui nomor telepon mahasiswa.
// Function Name:

// getStudentEmail(student)
// updateStudentPhone(student, newPhone)

function createMhs(name, age, email, phone) {
  return {
    name: name,
    age: age,
    contact: {
      email: email,
      phone: phone,
    },
  };
}

const mhs1 = createMhs('udin', 20, 'udin@gmail.com', '089510232');
console.log(mhs1);

function getStudentEmail(mhs) {
  return mhs.contact.email;
}

function UpdateStudentPhone(mhs, newPhone) {
  return mhs.contact.phone = newPhone;
}

console.log(getStudentEmail(mhs1));
UpdateStudentPhone(mhs1, '0903921');
console.log((mhs1));


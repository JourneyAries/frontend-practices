//16. Mengonversi Nilai Boolean ke String
//Buat fungsi booleanToString(bool) yang mengembalikan "Yes" jika bool adalah true dan "No" jika bool adalah false.

function booleanToString(bool) {
  if (bool) {
    return 'yes';
  } else {
    return 'no';
  }
}

console.log(booleanToString(true));
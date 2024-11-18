// 5. Sistem Pengelompokan Usia
// Buat fungsi categorizeAge(age) yang mengelompokkan umur menjadi kategori.

// Hint:
// Gunakan rentang umur berikut:
// 0-12: Anak-anak
// 13-19: Remaja
// 20-59: Dewasa
// 60 +: Lansia.

// console.log(categorizeAge(25));  Output: "Dewasa"

//switch
function categorizeAge1(age) {
  switch (true) {
    case (age >= 0 && age <= 12):
      return 'Anak-anak';
    case (age >= 13 && age <= 19):
      return 'Remaja';
    case (age >= 20 && age <= 59):
      return 'Dewasa';
    default:
      return 'Lansia';
  }
}

//if else
function categorizeAge2(age) {
  if (age >= 0 && age <= 12) {
    return 'Anak-anak';
  } else if (age >= 13 && age <= 19){
    return 'Remaja';
  } else if (age >= 20 && age <= 59) {
    return 'Dewasa';
  } else {
    return 'Lansia';
  }
}

//ternary
function categorizeAge3(age) {
  return age >= 0 && age <= 12
    ? 'Anak-anak'
    : age >= 13 && age <= 19
      ? 'Remaja'
      : age >= 20 && age <= 59
        ? 'Dewasa'
        : 'Lansia';
}

//Object dan for of
function categorizeAge4(age) {
  const categories = [
    { min: 0, max: 12, label: 'Anak-anak' },
    { min: 13, max: 13, label: 'Remaja' },
    { min: 20, max: 59, label: 'Dewasa' },
    {min: 60, max: Infinity, label: 'Lansia'}
  ];

  for (const category of categories) {
    if (age >= category.min && age <= category.max) {
      return category.label;
    }
  }
}

//Array, find
function categorizeAge5(age) {
  const categories = [
    [0, 12, 'Anak-anak'],
    [13, 19, 'Remaja'],
    [20, 59, 'Dewasa'],
    [60, Infinity, 'Lansia']
  ];

  return categories.find(([min, max]) => age >= min && age <= max)?.[2] || 'Umur tidak valid';
} 

console.log(categorizeAge1(0));
console.log(categorizeAge2(32));
console.log(categorizeAge3(13));
console.log(categorizeAge4(12));
console.log(categorizeAge5(12));
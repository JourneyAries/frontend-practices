//22. Menambahkan Awalan dan Akhiran pada String
//Buat fungsi addPrefixSuffix(str, prefix, suffix) yang menambahkan awalan (prefix) dan akhiran (suffix) pada string str.
//Contoh: addPrefixSuffix("user", "Mr. ", " Jr.") mengembalikan "Mr. user Jr.".

function addPrefixSuffix(str, prefix, suffix) {
  return `"${prefix} ${str} ${suffix}"`
}

console.log(addPrefixSuffix("user", "Mr. ", " Jr."));
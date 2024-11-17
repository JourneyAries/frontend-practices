//15. Cek Apakah Dua String Anagram
//Fungsi: isAnagram(str1, str2)
//Parameter: str1 (string), str2 (string)
//Hint: Ubah ke array, sort, lalu bandingkan.
//Contoh Pemanggilan: isAnagram("listen", "silent") // true

//sort
function isAnagram1(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

//map
function isAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < str1.length; i++){
    map1.set(str1[i], (map1.get(str1[i]) || 0) + 1);
    map2.set(str2[i], (map2.get(str2[i]) || 0) + 1);
  }

  return [...map1].every(([key, value]) => map2.get(key) === value);
}

//sort localeCompare
function isAnagram3(str1, str2) {
  return str1.split('').sort().join('').localeCompare(str2.split('').sort().join('')) === 0;
}

console.log(isAnagram1("listen", "silent"));
console.log(isAnagram2("listen", "silent"));
console.log(isAnagram3("listen", "silent"));
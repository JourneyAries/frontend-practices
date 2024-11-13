// Persegi
function persegiLuas(sisi) { 
  return sisi * sisi;
}

function persegiKeliling(sisi) {
  return sisi * 4;
}
// [END] Persegi

// Persegi Panjang
function persegiPanjangLuas(panjang, lebar) {
  return panjang * lebar;
}

function persegiPanjangKeliling(panjang, lebar) {
  return 2 * (panjang * lebar);
}
// [END] Persegi Panjang

// Segitiga
function segitigaLuas(panjangSisi, tinggi) {
  return .5 * panjangSisi * tinggi;
}

function segitigaKeliling(panjangSisi1, panjangSisi2, panjangSisi3) {
  return panjangSisi1 + panjangSisi2 + panjangSisi3;
}
// [END] Segitiga

// jajar genjang
function jajargenjangLuas(alas, tinggi) {
  return alas * tinggi;
}

function jajargenjangKeliling(alas, panjangSisiMiring) {
  return 2 * (alas + panjangSisiMiring);
}
// [END] jajar genjang

// Trapesium
function trapesiumLuas(panjangSisiSejajar, panjangSisiMiring, tinggi) {
  return .5 * (panjangSisiSejajar + panjangSisiMiring) * tinggi;
}

function trapesiumKeliling(panjangSisiSejajar1, panjangSisiSejajar2, panjangSisiMiring1, panjangSisiMiring2) {
  return panjangSisiSejajar1 + panjangSisiSejajar2 + panjangSisiMiring1 + panjangSisiMiring2;
}
// [END] Trapesium

// Lingkaran
function lingkaranLuas(jariJari) {
  return 3.14 * (jariJari * jariJari);
}

function lingkaranKeliling(jariJari) {
  return 2 * 3.14 * jariJari; 
}
// [END] Lingkaran

// Belah ketupat
function belahKetupatLuas(panjangDiagonal1, panjangDiagonal2) {
  return .5 * panjangDiagonal1 * panjangDiagonal2;
}

function belahKetupatKeliling(panjangSisi) {
  return 4 * panjangSisi;
}
// [END] Belah ketupat

// Layang-layang
function layangLayangLuas(panjangDiagonal1, panjangDiagonal2) {
  return .5 * panjangDiagonal1 * panjangDiagonal2;
}

function layangLayangKelilig(panjangSisiBerdekatan1, panjangSisiBerdekatan2) {
  return 2 * (panjangSisiBerdekatan1 + panjangSisiBerdekatan2);
}
// [END] Layang-layang
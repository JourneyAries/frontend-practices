//21. Perkalian Matriks 1xN dan Nx1
//Buat fungsi multiplyMatrices(matrix1, matrix2) yang menerima dua matriks, masing-masing ukuran 1xN dan Nx1, dan mengembalikan hasil perkalian mereka (sebuah bilangan).

function multiplyMatrices(matrix1, matrix2) {
  let result = 0;
  matrix1.forEach((e, i) => {
    result += e * matrix2[i][0];
  });
  return result;
}

console.log(multiplyMatrices([2, 4], [[3], [1]]));
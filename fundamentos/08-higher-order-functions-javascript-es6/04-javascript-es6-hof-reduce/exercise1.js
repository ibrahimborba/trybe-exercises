const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Transforma uma matriz em um array
function flatten(matrix) {
  // escreva seu código aqui
  return matrix.reduce((acc, elem) => acc.concat(elem), []);
}
console.log(flatten(arrays));

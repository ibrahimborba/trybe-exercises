const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const returnArrayItems = () => {
  const array = [];
  
}

function flatten(matrix) {
  // escreva seu código aqui
  return matrix.reduce((acc, elem) => acc.concat(elem), []);
}
console.log(flatten(arrays));

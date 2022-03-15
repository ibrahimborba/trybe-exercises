const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Conta quantas vezes a letra 'a', maiúscula ou minúscula, aparece na lista
function containsA(array, letter) {
  // escreva seu código aqui
  // Source: https://stackoverflow.com/questions/7053506/how-to-put-variable-in-regular-expression-match
  const regex = new RegExp(letter, 'gi');
  return array.reduce((acc, elem) => acc + elem.match(regex).length, 0);
}
console.log(containsA(names, 'a'));

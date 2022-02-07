//Retorna os números pares do 'vector' dentro de um novo 'array'
function arrayOfNumbers(vector) {
  let areEven = [];
  for (let i = 0; i < vector.length; i += 1){
    for (let j = 0; j < vector[i].length; j += 1){
      if(vector[i][j] % 2 === 0){
        areEven.push(vector[i][j]);
      }
    }
  }
  return areEven;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector));

// Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

console.log('O morador do bloco 2 de nome ' + moradores['blocoDois'][1]['nome'] + ' ' +  moradores['blocoDois'][1]['sobrenome'] + ' mora no ' + moradores['blocoDois'][1]['andar'] + '° andar, apartamento ' +  moradores['blocoDois'][1]['apartamento']);
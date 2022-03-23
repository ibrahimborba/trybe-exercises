// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercise8.js');

describe('A função getPokemonDetails', () => {
  const expectedError = new Error('Não temos esse pokémon para você :(');
  const expected = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';

  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    function callbackError(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Ibrahim', callbackError);
  });

  it('retorna erro se o tipo não existe', (done) => {
    function callbackError(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.type === 'Eletric', callbackError);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    function callbackResut(error, result) {
      expect(result).toEqual(expected);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callbackResut);
  });

  it('retorna o pokemon se o tipo existe', (done) => {
    function callbackResut(error, result) {
      expect(result).toEqual(expected);
      done();
    }
    
    getPokemonDetails((pokemon) => pokemon.type === 'Grass', callbackResut);
  });
});